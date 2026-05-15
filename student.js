// Este arquivo contém as partes que os alunos devem modificar.
// Aqui está o lugar ideal para trabalhar com padrões e cores do SVG.

function teste2SVG(options) {
    const { width, height, gridSize, minOpacity, maxOpacity } = options;

    return `<?xml version="1.0" encoding="UTF-8"?>
            <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="100%" fill="#808080" />
                <rect width="50%" height="50%" fill="red" />
                <rect x="10" y="10" width="50" height="50" fill="green" />
            </svg>
    `;
}

function testeSVG(options) {
    const { width, height, gridSize, minOpacity, maxOpacity } = options;

    return `<?xml version="1.0" encoding="UTF-8"?>
            <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="100%" fill="#808080" />
                <rect width="50%" height="50%" fill="#000080" />
                <rect x="10" y="10" width="50" height="50" fill="#008080" />
            </svg>
    `;
}

function gerarCirculo(options) {
    const { width, height, gridSize, minOpacity, maxOpacity, radius} = options;

    console.log("gridSize", gridSize);
    console.log("radius", radius);
    let saida = ''
    for (let y = 0; y < height; y += gridSize) {
        for (let x = 0; x < width; x += gridSize) {
            const opacity = randomBetween(minOpacity, maxOpacity).toFixed(2);
            saida += `<circle r="${radius}" cx="${x}" cy="${y}" width="${gridSize}" height="${gridSize}" fill="#000080" fill-opacity="${opacity}" stroke-width="0" />`;
        }
    }

    //console.log("Saida",saida);
    
    return `<?xml version="1.0" encoding="UTF-8"?>
            <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
                <circle width="100%" height="100%" fill="#ffffff" />
                ${saida}
            </svg>
    `;
}  

function gerarQuadrados(options) {
    const { width, height, gridSize, minOpacity, maxOpacity } = options;

    console.log("gridSize", gridSize);
    let saida = ''
    for (let y = 0; y < height; y += gridSize) {
        for (let x = 0; x < width; x += gridSize) {
            const opacity = randomBetween(minOpacity, maxOpacity).toFixed(2);
            saida += `<rect x="${x}" y="${y}" width="${gridSize}" height="${gridSize}" fill="#000080" fill-opacity="${opacity}" stroke-width="0" />`;
        }
    }

    console.log("Saida",saida);
    
    return `<?xml version="1.0" encoding="UTF-8"?>
            <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="100%" fill="#ffffff" />
                ${saida}
            </svg>
    `;
}

// Função que escolhe qual padrão gerar. Alunos podem adicionar novos padrões aqui.
function generateSVG(options) {
    if (options.pattern === 'teste') {
        return testeSVG(options)
    }
    if (options.pattern === 'teste2') {
        return teste2SVG(options)
    }
    if (options.pattern === 'squares') {
        return gerarQuadrados(options)
    }
    if (options.pattern === 'circles') {
        return gerarCirculo(options)
    }

    // Padrões futuros podem ser implementados aqui.
    return ''
}

let currentSvgUrl = null;

// Atualiza o preview e o botão de download.
function renderSVG(options, previewElement, previewSizeElement, downloadButton) {
    const svg = generateSVG(options);

    previewElement.innerHTML = svg;
    previewSizeElement.textContent = `${options.width} x ${options.height}`;

    if (currentSvgUrl) {
        URL.revokeObjectURL(currentSvgUrl);
    }

    currentSvgUrl = createSvgBlobUrl(svg);
    downloadButton.setAttribute('data-svg-url', currentSvgUrl);
}
