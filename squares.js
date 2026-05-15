
// Cor usada nos quadrados. Altere aqui para experimentar com outras cores.
const squareColor = '#475569';

// Gera o SVG de quadrados em grade uniforme.
function generateSquaresSVG(options) {
  const { width, height, gridSize, minOpacity, maxOpacity } = options;
  const cellWidth = width / gridSize;
  const cellHeight = height / gridSize;

  let shapes = '';
  for (let row = 0; row < gridSize; row += 1) {
    for (let col = 0; col < gridSize; col += 1) {
      const x = col * cellWidth;
      const y = row * cellHeight;
      const opacity = randomBetween(minOpacity, maxOpacity);

      shapes += `  <rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${cellWidth.toFixed(1)}" height="${cellHeight.toFixed(1)}" fill="${squareColor}" opacity="${opacity.toFixed(2)}" />\n`;
    }
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#ffffff" />
${shapes}</svg>`;
}