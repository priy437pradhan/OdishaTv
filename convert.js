const sharp = require('sharp');

sharp('input.jpg')
  .toFile('output.avif', (err, info) => {
    if (err) {
      console.error('Error:', err);
    } else {
      console.log('Converted to AVIF:', info);
    }
  });

sharp('input.jpg')
  .toFile('output.webp', (err, info) => {
    if (err) {
      console.error('Error:', err);
    } else {
      console.log('Converted to WebP:', info);
    }
  });
