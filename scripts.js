const perguntas = [
    {
      Pergunta: "Quantos títulos brasileiros o Corinthians possui?",
      Respostas: [
        "7",
        "8",
        "9",
      ],
      correta: 0
    },
    {
      Pergunta: "Qual jogador é conhecido como 'O Fenômeno' e teve uma passagem de destaque pelo Corinthians?",
      Respostas: [
        "Ronaldo",
        "Rivaldo",
        "Ronaldinho",
      ],
      correta: 0
    },
    {
      Pergunta: "Em que ano o Corinthians conquistou seu primeiro título mundial de clubes?",
      Respostas: [
        "2000",
        "2012",
        "1990",
      ],
      correta: 0
    },
    {
      Pergunta: "Qual é o estádio oficial do Corinthians?",
      Respostas: [
        "Arena Fonte Nova",
        "Maracanã",
        "Arena Corinthians",
      ],
      correta: 2
    },
    {
      Pergunta: "Quem foi o técnico do Corinthians na conquista da Copa Libertadores da América em 2012?",
      Respostas: [
        "Tite",
        "Mano Menezes",
        "Carille",
      ],
      correta: 0
    },
    {
      Pergunta: "Qual jogador corintiano é conhecido como 'Sheik'?",
      Respostas: [
        "Jô",
        "Fábio Santos",
        "Emerson",
      ],
      correta: 2
    },
    {
      Pergunta: "Em que ano o Corinthians foi fundado?",
      Respostas: [
        "1910",
        "1912",
        "1908",
      ],
      correta: 0
    },
    {
      Pergunta: "Qual foi o primeiro título internacional conquistado pelo Corinthians?",
      Respostas: [
        "Libertadores",
        "Copa do Mundo de Clubes",
        "Copa Sul-Americana",
      ],
      correta: 1
    },
    {
      Pergunta: "Qual foi o placar da final da libertadores de 2012, em que o Corinthians foi campeão?",
      Respostas: [
        "2-0",
        "3-1",
        "1-0",
      ],
      correta: 0
    },
    {
      Pergunta: "Qual foi o jogador artilheiro do Corinthians na temporada de 2020?",
      Respostas: [
        "Gabriel",
        "Luan",
        "Jô",
      ],
      correta: 2
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.Pergunta
  
    for(let resposta of item.Respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.Respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if (estaCorreta) {
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
  
      quizItem.querySelector('dl').appendChild(dt)
  
  
    }
  
    quizItem.querySelector('dl dt').remove()
  
    quiz.appendChild(quizItem)
  }
  