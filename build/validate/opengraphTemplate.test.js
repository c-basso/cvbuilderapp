const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');

const templatePath = path.join(__dirname, '..', 'template.html');

test('template uses correct Twitter attributes and includes image dimensions', () => {
  const template = fs.readFileSync(templatePath, 'utf8');

  assert.match(template, /<meta\s+name="twitter:card"\s+content=/);
  assert.match(template, /<meta\s+name="twitter:url"\s+content=/);
  assert.match(template, /<meta\s+name="twitter:title"\s+content=/);
  assert.match(template, /<meta\s+name="twitter:description"\s+content=/);
  assert.match(template, /<meta\s+name="twitter:image"\s+content=/);

  assert.match(template, /<meta\s+property="og:image:width"\s+content="{{meta\.og_image_width}}">/);
  assert.match(template, /<meta\s+property="og:image:height"\s+content="{{meta\.og_image_height}}">/);
  assert.match(template, /<meta\s+name="twitter:image:width"\s+content="{{meta\.twitter_image_width}}">/);
  assert.match(template, /<meta\s+name="twitter:image:height"\s+content="{{meta\.twitter_image_height}}">/);
});
