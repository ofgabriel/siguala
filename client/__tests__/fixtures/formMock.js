export default {
  input: {
    etapas: [
      {
        numero: 1,
        nome: 'Aceite da Verificação',
        descricao: 'Alguma descrição dessa etapa',
        topicos: [
          {
            nome: 'Uma etapa qualquer',
            itens: [
              {
                pergunta: 'Você trocaria 1 melão por 100 mil reais?',
                requisitoSeloOuro: true,
              },
              {
                pergunta: 'Você trocaria 1 melão por 1 ebape funcional?',
                requisitoSeloOuro: false,
              },
              {
                pergunta: 'Você trocaria 1 ebape funcional por 1 aprovação automática? Além disso, esse é um exemplo de uma pergunta muito mais longa que as anteriores.',
                requisitoSeloOuro: true,
              },
            ],
          },
        ],
      },
    ],
  },
  output: {
    etapas: [
      {
        numero: 1,
        nome: 'Aceite da Verificação',
        descricao: 'Alguma descrição dessa etapa',
        respondida: false,
        visitada: true,
        topicos: [
          {
            nome: 'Uma etapa qualquer',
            itens: [
              {
                pergunta: 'Você trocaria 1 melão por 100 mil reais?',
                requisitoSeloOuro: true,
                resposta: null,
              },
              {
                pergunta: 'Você trocaria 1 melão por 1 ebape funcional?',
                requisitoSeloOuro: false,
                resposta: null,
              },
              {
                pergunta: 'Você trocaria 1 ebape funcional por 1 aprovação automática? Além disso, esse é um exemplo de uma pergunta muito mais longa que as anteriores.',
                requisitoSeloOuro: true,
                resposta: null,
              },
            ],
          },
        ],
      },
    ],
  },
};
