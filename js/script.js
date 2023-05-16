const container = document.querySelector('.container'),
      p = document.querySelector('p'),
      btnRandom = document.querySelector('.btnRandom')
      
function embaralhar() {
    const letras = ['a', 'b', 'c', 'd', 'e', 'f']
    let hash = '#'
    let hexaColor = []
    
    for (let i = 0; i < 36; i++) {
        // numero aleatório enter 0 e 9
        hexaColor.push(Math.floor(Math.random()*9) + 0)
    }

    for (let i = 0; i < 100; i++) {
        // letras aleatórias
        hexaColor.push(letras[Math.floor(Math.random() * letras.length)])
    }

    // Loop em todos os elementos
    for (let i = hexaColor.length - 1; i > 0; i--) {
        // Escolhendo elemento aleatório
        const j = Math.floor(Math.random() * (i + 1));
        // Reposicionando elemento
        [hexaColor[i], hexaColor[j]] = [hexaColor[j], hexaColor[i]];
    }
    // Retornando array com aleatoriedade
    hexaColor.forEach(item => {
        hash += item
    })
    
    container.style.background = hash.substring(0, 7)
    p.innerHTML = hash.substring(0, 7)

    // console.log(hash.substring(0, 7))

    return hash.substring(0, 7); // define o tamanho máximo da string
}

btnRandom.addEventListener('click', embaralhar)