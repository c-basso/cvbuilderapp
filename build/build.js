const fs = require('fs');
const path = require('path');

const {
    URLS,
    SITE_URL,
    DEFAULT_LANGUAGE,
    LANGUAGES
} = require('./constants');

(function() {
    const urlsPath = path.join(__dirname, '..', 'urls.txt');

    fs.writeFileSync(urlsPath, URLS.map(({url}) => url).join('\n'), 'utf8');
    console.log(`✅ Successfully built urls.txt file`);
    console.log(`📁 Output saved to: ${urlsPath}`);
    console.log()


    for (const lang of LANGUAGES) {
        try {
            const htmlDir = path.join(__dirname, lang === DEFAULT_LANGUAGE ? '..' : `../${lang}/`);
            const previewPath = `${SITE_URL}${lang === DEFAULT_LANGUAGE ? '' : `${lang}/`}site_preview.png`;

            // Read the template and JSON files
            const templatePath = path.join(__dirname, 'template.html');
            const jsonPath = path.join(__dirname, `${lang}.json`);
            const outputPath = path.join(htmlDir, 'index.html');

            if (!fs.existsSync(htmlDir)) {
                fs.mkdirSync(htmlDir, { recursive: true });
            }
            
            const template = fs.readFileSync(templatePath, 'utf8');
            const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
            
            // Add build timestamp for cache busting
            const buildTimestamp = Date.now();
            if (!data.meta) {
                data.meta = {};
            }
            data.meta.version = buildTimestamp;
            // Ensure canonical URL is always available for JSON-LD
            if (!data.meta.canonical) {
                data.meta.canonical = data.meta.altenate_url || SITE_URL;
            }
            data.meta.alternate_default = SITE_URL;
            data.meta.alternate_languages = URLS;

            data.meta.og_image = previewPath;
            data.meta.twitter_image = previewPath;
            
            // Replace {year} placeholder in footer.copyright with current year
            const currentYear = new Date().getFullYear();
            if (data.footer && data.footer.copyright) {
                data.footer.copyright = data.footer.copyright.replace(/\{year\}/g, currentYear.toString());
            }

            // Build JSON-LD objects from translation data to avoid hardcoded strings in template
            const stripHtml = (value) => {
                if (typeof value !== 'string') return value;
                return value
                    .replace(/<[^>]*>/g, ' ')
                    .replace(/\s+/g, ' ')
                    .trim();
            };

            if (!data.seo) data.seo = {};
            if (!data.seo.structured_data) data.seo.structured_data = {};

            // Organization: basic publisher info
            if (!data.seo.structured_data.organization) {
                data.seo.structured_data.organization = {
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": data.meta?.og_site_name || data.app_info?.name || "CV Builder",
                    "url": data.meta?.canonical || SITE_URL,
                    "logo": data.meta?.og_logo || "https://cvbuilderapp.com/logo.webp"
                };
            }

            // SoftwareApplication: inject canonical/download URL (language-specific)
            if (data.seo.structured_data.software_application && typeof data.seo.structured_data.software_application === 'object') {
                data.seo.structured_data.software_application.url = data.meta?.canonical;
                data.seo.structured_data.software_application.downloadUrl = data.header?.download_url;
            }

            // WebSite: keep translation content, but ensure url matches canonical
            if (!data.seo.structured_data.website) {
                data.seo.structured_data.website = {
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    "name": data.meta?.og_site_name || data.app_info?.name || "CV Builder",
                    "url": data.meta?.canonical || SITE_URL
                };
            } else if (typeof data.seo.structured_data.website === 'object') {
                data.seo.structured_data.website.url = data.meta?.canonical;
                if (!data.seo.structured_data.website.name) {
                    data.seo.structured_data.website.name = data.meta?.og_site_name || data.app_info?.name || "CV Builder";
                }
            }

            // HowTo: ensure object exists, then build steps from how_it_works.steps (strip HTML)
            if (!data.seo.structured_data.howto) {
                data.seo.structured_data.howto = {
                    "@context": "https://schema.org",
                    "@type": "HowTo",
                    "name": stripHtml(data.meta?.title),
                    "description": stripHtml(data.meta?.description)
                };
            }
            if (data.seo.structured_data.howto && typeof data.seo.structured_data.howto === 'object') {
                if (Array.isArray(data.how_it_works?.steps)) {
                    data.seo.structured_data.howto.step = data.how_it_works.steps.map((s) => ({
                        "@type": "HowToStep",
                        "name": stripHtml(s?.title),
                        "text": stripHtml(s?.description)
                    }));
                }
                // Ensure step is always an array
                if (!data.seo.structured_data.howto.step) {
                    data.seo.structured_data.howto.step = [];
                }
            }

            // FAQPage: build from faq.items (strip HTML) or create an empty FAQPage if none defined
            if (Array.isArray(data.faq?.items)) {
                data.seo.structured_data.faqpage = {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": data.faq.items.map((f) => ({
                        "@type": "Question",
                        "name": stripHtml(f?.question),
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": stripHtml(f?.answer)
                        }
                    }))
                };
            } else if (!data.seo.structured_data.faqpage) {
                data.seo.structured_data.faqpage = {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": []
                };
            }

            // BreadcrumbList: use translated label + canonical
            if (!data.seo) data.seo = {};
            if (!data.seo.breadcrumb_home) {
                data.seo.breadcrumb_home = data.meta?.title || "Home";
            }
            data.seo.structured_data.breadcrumb_list = {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": data.seo.breadcrumb_home,
                        "item": data.meta?.canonical
                    }
                ]
            };
            
            // Function to get value from nested object path
            function getValue(obj, path) {
                const keys = path.split('.');
                let value = obj;
                
                for (const k of keys) {
                    if (value && typeof value === 'object' && k in value) {
                        value = value[k];
                    } else {
                        return undefined;
                    }
                }
                
                return value;
            }
            
            // Function to get value from nested object path, checking context variables first
            function getValueFromContext(context, path) {
                // First try direct path (e.g., "content.sections" from root)
                let value = getValue(context, path);
                if (value !== undefined) {
                    return value;
                }
                
                // If path contains dots, try to resolve from context variables (for nested #each)
                // This handles cases like "section.list_items" where "section" is a variable from outer loop
                if (path.includes('.')) {
                    const parts = path.split('.');
                    const firstPart = parts[0];
                    
                    // Check if firstPart is a direct property in context (set by outer #each loop)
                    // This is the key: when we have nested #each, the outer loop sets variables like "section"
                    // in the mergedContext, so we need to check if firstPart exists as a direct property
                    if (firstPart in context) {
                        const firstValue = context[firstPart];
                        // Allow both objects and arrays (arrays are objects in JS, but we want to traverse them)
                        if (firstValue && typeof firstValue === 'object' && firstValue !== null) {
                            const restPath = parts.slice(1).join('.');
                            if (restPath) {
                                value = getValue(firstValue, restPath);
                                if (value !== undefined) {
                                    return value;
                                }
                            } else {
                                // If no rest path, return the object itself
                                return firstValue;
                            }
                        }
                    }
                }
                
                return undefined;
            }
            
            // Function to replace variables in template
            function replaceVariables(template, context) {
                return template.replace(/\{\{([^}]+)\}\}/g, (match, key) => {
                    const rawKey = key.trim();
                    
                    // Skip #each blocks and /each - these are handled by processEachBlocks
                    if (rawKey.startsWith('#each') || rawKey === '/each') {
                        return match; // Keep as-is, will be processed by processEachBlocks
                    }
                    
                    const [pathExpression, ...filters] = rawKey
                        .split('|')
                        .map(s => s.trim())
                        .filter(Boolean);

                    let value = getValue(context, pathExpression);
                    
                    if (value !== undefined) {
                        for (const filter of filters) {
                            if (filter === 'json') {
                                value = JSON.stringify(value);
                            } else {
                                console.warn(`Warning: Unknown filter "${filter}" in ${rawKey}`);
                            }
                        }
                        return value;
                    } else {
                        // Only warn for variables that aren't from #each loops (which are processed separately)
                        // Variables like "item" are expected to be in the context when processing inner #each blocks
                        // If they're not found, it means the #each block wasn't processed, which is a different issue
                        // Don't warn for common loop variable names that might be processed later
                        // Also don't warn for structured_data properties that are created dynamically by the build script
                        const isLoopVariable = ['item', 'feature', 'section'].includes(pathExpression);
                        const isStructuredData = pathExpression.startsWith('seo.structured_data.');
                        if (!isLoopVariable && !isStructuredData) {
                            console.warn(`Warning: Variable ${pathExpression} not found in data`);
                        }
                        return match; // Keep original placeholder if not found
                    }
                });
            }
            
            // Function to process #each blocks (handles nested blocks recursively)
            function processEachBlocks(template, data) {
                // Pattern to match {{#each path as |varName|}}...{{/each}}
                const eachPattern = /\{\{#each\s+([^\s]+)\s+as\s+\|([^|]+)\|\}\}([\s\S]*?)\{\{\/each\}\}/;
                let result = template;
                let match;
                
                // Keep processing until no more #each blocks are found
                while ((match = result.match(eachPattern)) !== null) {
                    const fullMatch = match[0];
                    const arrayPath = match[1].trim();
                    const varName = match[2].trim();
                    let blockContent = match[3];
                    
                    // Get the array from data, checking context variables for nested paths
                    let array = getValueFromContext(data, arrayPath);
                    
                    if (!Array.isArray(array)) {
                        // Only warn if it's not an empty array (which is valid)
                        if (array !== undefined && array !== null) {
                            console.warn(`Warning: ${arrayPath} is not an array (got ${typeof array})`);
                        } else {
                            // Don't warn for nested paths that might not exist in some sections
                            if (!arrayPath.includes('.')) {
                                console.warn(`Warning: ${arrayPath} is not an array or not found`);
                            }
                        }
                        result = result.replace(fullMatch, '');
                        continue;
                    }
                    
                    // Process each item in the array
                    let processedBlocks = array.map((item, index) => {
                        // Create context with the item accessible by varName
                        const itemContext = { [varName]: item };
                        const mergedContext = { ...data, ...itemContext };
                        
                        // Recursively process nested #each blocks first
                        let processedContent = processEachBlocks(blockContent, mergedContext);
                        
                        // Then process variables in the block content
                        processedContent = replaceVariables(processedContent, mergedContext);
                        
                        return processedContent;
                    }).join('');
                    
                    // Remove trailing comma after the last item in JSON-LD arrays
                    // Pattern: }, followed by newline, optional whitespace/newlines, then closing bracket
                    processedBlocks = processedBlocks.replace(/,\s*\n[\s\n]*\]/g, '\n            ]');
                    // Also handle comma on same line as closing bracket (fallback)
                    processedBlocks = processedBlocks.replace(/,\s*\]/g, ']');
                    
                    // Replace the entire #each block with processed content
                    result = result.replace(fullMatch, processedBlocks);
                }
                
                return result;
            }
            
            // First process #each blocks, then replace remaining variables
            let result = processEachBlocks(template, data);
            result = replaceVariables(result, data);
            
            // Final cleanup: remove any trailing commas before closing brackets in JSON-LD
            // This catches any trailing commas that might have been missed
            result = result.replace(/,\s*\n[\s\n]*\]/g, '\n            ]');
            result = result.replace(/,\s*\]/g, ']');
            
            // Write the result to en.html
            fs.writeFileSync(outputPath, result, 'utf8');
            
            console.log(`✅ Successfully built ${lang}.html from template and ${lang}.json`);
            console.log(`📁 Output saved to: ${outputPath}`);
            
        } catch (error) {
            console.error('❌ Error building HTML:', error.message);
            process.exit(1);
        }
    }
})();
