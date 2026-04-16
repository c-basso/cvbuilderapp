const { validateJsonLD } = require('./jsonLDValidator');
const { validateOpenGraph } = require('./opengraphValidator');

async function main() {
  console.log('Running validators...\n');
  
  const results = [];
  
  // Run JSON-LD validator
  console.log('1. Validating JSON-LD structured data...');
  const jsonLDResult = await validateJsonLD();
  results.push({ name: 'JSON-LD', result: jsonLDResult });
  console.log('');
  
  // Run Open Graph validator (includes image size check)
  console.log('2. Validating Open Graph meta tags and image size...');
  const openGraphResult = await validateOpenGraph();
  results.push({ name: 'Open Graph', result: openGraphResult });
  console.log('');
  
  // Summary
  const failed = results.filter(r => !r.result.ok);
  const passed = results.filter(r => r.result.ok);
  
  if (failed.length === 0) {
    console.log(`✅ All validators passed (${passed.length}/${results.length})`);
    process.exit(0);
  } else {
    console.error(`❌ Validation failed: ${failed.length} validator(s) failed (${passed.length}/${results.length} passed)`);
    process.exit(1);
  }
}

if (require.main === module) {
  main().catch((err) => {
    console.error('Unexpected error while running validators:', err);
    process.exit(1);
  });
}

module.exports = { main };
