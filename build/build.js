const fs = require('fs');
const path = require('path');

const languages = [
    'en',
    'ru',
    'es',
    'fr',
    'de',
    'it',
    'pt'
];

(function() {
    for (const lang of languages) {
        try {
            const htmlDir = path.join(__dirname, lang === 'en' ? '..' : `../${lang}/`);

            // Read the template and JSON files
            const templatePath = path.join(__dirname, 'template.html');
            const jsonPath = path.join(__dirname, `${lang}.json`);
            const outputPath = path.join(htmlDir, 'index.html');

            if (!fs.existsSync(htmlDir)) {
                fs.mkdirSync(htmlDir, { recursive: true });
            }
            
            const template = fs.readFileSync(templatePath, 'utf8');
            const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
            
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
            
            // Function to replace variables in template
            function replaceVariables(template, context) {
                return template.replace(/\{\{([^}]+)\}\}/g, (match, key) => {
                    const value = getValue(context, key.trim());
                    
                    if (value !== undefined) {
                        return value;
                    } else {
                        console.warn(`Warning: Variable ${key} not found in data`);
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
                    
                    // Get the array from data
                    const array = getValue(data, arrayPath);
                    
                    if (!Array.isArray(array)) {
                        console.warn(`Warning: ${arrayPath} is not an array or not found`);
                        result = result.replace(fullMatch, '');
                        continue;
                    }
                    
                    // Process each item in the array
                    const processedBlocks = array.map((item, index) => {
                        // Create context with the item accessible by varName
                        const itemContext = { [varName]: item };
                        const mergedContext = { ...data, ...itemContext };
                        
                        // Recursively process nested #each blocks first
                        let processedContent = processEachBlocks(blockContent, mergedContext);
                        
                        // Then process variables in the block content
                        processedContent = replaceVariables(processedContent, mergedContext);
                        
                        // Handle trailing comma in JSON-LD (remove comma after last item)
                        if (index === array.length - 1) {
                            processedContent = processedContent.replace(/,\s*$/m, '');
                        }
                        
                        return processedContent;
                    }).join('');
                    
                    // Replace the entire #each block with processed content
                    result = result.replace(fullMatch, processedBlocks);
                }
                
                return result;
            }
            
            // First process #each blocks, then replace remaining variables
            let result = processEachBlocks(template, data);
            result = replaceVariables(result, data);
            
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
