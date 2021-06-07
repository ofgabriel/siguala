import calcularSimulacao from '../src/services/calcular-simulacao';

describe('Calcular Resultado', () => {
  it('calcula resultado para selo bronze', () => {
    const etapas = [
      {
        nome: 'Etapa 1',
        topicos: [
          {
            nome: 'Topico 1.1',
            itens: [
              {
                pergunta: 'Pergunta 1.1.a',
                requisitoSeloOuro: false,
                resposta: 'sim',
              },
              {
                pergunta: 'Pergunta 1.1.b',
                requisitoSeloOuro: true,
                resposta: 'nao',
              },
            ],
          },
          {
            nome: 'Topico 1.2',
            itens: [
              {
                pergunta: 'Pergunta 1.2.a',
                requisitoSeloOuro: false,
                resposta: 'nao',
              },
            ],
          },
        ],
      },
      {
        nome: 'Etapa 2',
        topicos: [
          {
            nome: 'Topico 2.1',
            itens: [
              {
                pergunta: 'Pergunta 2.1.a',
                requisitoSeloOuro: true,
                resposta: 'nao',
              },
            ],
          },
        ],
      },
    ];

    const resultado = calcularSimulacao(etapas, 1, 2, 3);

    expect(resultado.selo).toBe(3); // bronze
    expect(resultado.pontos).toBe(25);
  });

  it('calcula resultado para selo prata', () => {
    const etapas = [
      {
        nome: 'Etapa 1',
        topicos: [
          {
            nome: 'Topico 1.1',
            itens: [
              {
                pergunta: 'Pergunta 1.1.a',
                requisitoSeloOuro: false,
                resposta: 'sim',
              },
              {
                pergunta: 'Pergunta 1.1.b',
                requisitoSeloOuro: true,
                resposta: 'nao',
              },
            ],
          },
          {
            nome: 'Topico 1.2',
            itens: [
              {
                pergunta: 'Pergunta 1.2.a',
                requisitoSeloOuro: false,
                resposta: 'sim',
              },
            ],
          },
        ],
      },
      {
        nome: 'Etapa 2',
        topicos: [
          {
            nome: 'Topico 2.1',
            itens: [
              {
                pergunta: 'Pergunta 2.1.a',
                requisitoSeloOuro: true,
                resposta: 'nao',
              },
            ],
          },
        ],
      },
    ];

    const resultado = calcularSimulacao(etapas, 1, 2, 3);

    expect(resultado.selo).toBe(2); // prata
    expect(resultado.pontos).toBe(50);
  });

  it('calcula resultado para selo prata por reponder NAO em alguma de selo ouro', () => {
    const etapas = [
      {
        nome: 'Etapa 1',
        topicos: [
          {
            nome: 'Topico 1.1',
            itens: [
              {
                pergunta: 'Pergunta 1.1.a',
                requisitoSeloOuro: false,
                resposta: 'sim',
              },
              {
                pergunta: 'Pergunta 1.1.b',
                requisitoSeloOuro: true,
                resposta: 'nao',
              },
            ],
          },
          {
            nome: 'Topico 1.2',
            itens: [
              {
                pergunta: 'Pergunta 1.2.a',
                requisitoSeloOuro: false,
                resposta: 'sim',
              },
            ],
          },
        ],
      },
      {
        nome: 'Etapa 2',
        topicos: [
          {
            nome: 'Topico 2.1',
            itens: [
              {
                pergunta: 'Pergunta 2.1.a',
                requisitoSeloOuro: true,
                resposta: 'sim',
              },
            ],
          },
        ],
      },
    ];

    const resultado = calcularSimulacao(etapas, 1, 2, 3);

    expect(resultado.selo).toBe(2); // prata
    expect(resultado.pontos).toBe(75);
  });

  it('calcula resultado para selo ouro', () => {
    const etapas = [
      {
        nome: 'Etapa 1',
        topicos: [
          {
            nome: 'Topico 1.1',
            itens: [
              {
                pergunta: 'Pergunta 1.1.a',
                requisitoSeloOuro: false,
                resposta: 'sim',
              },
              {
                pergunta: 'Pergunta 1.1.b',
                requisitoSeloOuro: true,
                resposta: 'sim',
              },
            ],
          },
          {
            nome: 'Topico 1.2',
            itens: [
              {
                pergunta: 'Pergunta 1.2.a',
                requisitoSeloOuro: false,
                resposta: 'nao',
              },
            ],
          },
        ],
      },
      {
        nome: 'Etapa 2',
        topicos: [
          {
            nome: 'Topico 2.1',
            itens: [
              {
                pergunta: 'Pergunta 2.1.a',
                requisitoSeloOuro: true,
                resposta: 'sim',
              },
            ],
          },
        ],
      },
    ];

    const resultado = calcularSimulacao(etapas, 1, 2, 3);

    expect(resultado.selo).toBe(1); // ouro
    expect(resultado.pontos).toBe(75);
  });

  it('calcula resultado para nenhum selo', () => {
    const etapas = [
      {
        nome: 'Etapa 1',
        topicos: [
          {
            nome: 'Topico 1.1',
            itens: [
              {
                pergunta: 'Pergunta 1.1.a',
                requisitoSeloOuro: false,
                resposta: 'nao',
              },
              {
                pergunta: 'Pergunta 1.1.b',
                requisitoSeloOuro: true,
                resposta: 'nao',
              },
            ],
          },
          {
            nome: 'Topico 1.2',
            itens: [
              {
                pergunta: 'Pergunta 1.2.a',
                requisitoSeloOuro: false,
                resposta: 'nao',
              },
            ],
          },
        ],
      },
      {
        nome: 'Etapa 2',
        topicos: [
          {
            nome: 'Topico 2.1',
            itens: [
              {
                pergunta: 'Pergunta 2.1.a',
                requisitoSeloOuro: true,
                resposta: 'nao',
              },
            ],
          },
        ],
      },
    ];

    const resultado = calcularSimulacao(etapas, 1, 2, 3);

    expect(resultado.selo).toBe(0); // nenhum
    expect(resultado.pontos).toBe(0);
  });
});
