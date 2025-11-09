const fs = require('fs');
const path = require('path');

const languages = ['en', 'ru'];

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
            
            // Function to replace variables in template
            function replaceVariables(template, data) {
                return template.replace(/\{\{([^}]+)\}\}/g, (match, key) => {
                    const keys = key.split('.');
                    let value = data;
                    
                    for (const k of keys) {
                        if (value && typeof value === 'object' && k in value) {
                            value = value[k];
                        } else {
                            console.warn(`Warning: Variable ${key} not found in data`);
                            return match; // Keep original placeholder if not found
                        }
                    }
                    
                    return value !== undefined ? value : match;
                });
            }
            
            // Apply variables to template
            const result = replaceVariables(template, data);
            
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
