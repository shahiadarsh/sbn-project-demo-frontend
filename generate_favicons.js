const sharp = require('sharp');
const fs = require('fs');

async function generateFavicons() {
  const size = 512;
  const logoW = 460;
  const logoH = Math.round(logoW * 1220 / 3720); // 151px

  // Extract SBN mark & text tightly
  const sbnBuffer = await sharp('./public/SBN_LOGO.png')
    .extract({ left: 180, top: 55, width: 3720, height: 1220 })
    .resize(logoW, logoH, { fit: 'contain' })
    .toBuffer();

  // Create crisp white circular badge with light clean border matching Google's style
  const circleSvg = Buffer.from(
    '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg">' +
    '<circle cx="256" cy="256" r="248" fill="#ffffff" stroke="#e2e8f0" stroke-width="10"/>' +
    '</svg>'
  );

  const topOffset = Math.round((size - logoH) / 2);
  const leftOffset = Math.round((size - logoW) / 2);

  const icon512 = await sharp(circleSvg)
    .composite([{
      input: sbnBuffer,
      top: topOffset,
      left: leftOffset
    }])
    .png()
    .toBuffer();

  fs.writeFileSync('./public/icon-512.png', icon512);
  console.log('Generated icon-512.png');

  // Generate 192x192
  await sharp(icon512)
    .resize(192, 192)
    .png()
    .toFile('./public/icon-192.png');
  console.log('Generated icon-192.png');

  // Generate 48x48 and 32x32 for favicon.ico so it is crisp in browser tab
  await sharp(icon512)
    .resize(48, 48)
    .png()
    .toFile('./public/favicon.ico');
  console.log('Generated favicon.ico');
}

generateFavicons().catch(err => {
  console.error(err);
  process.exit(1);
});
