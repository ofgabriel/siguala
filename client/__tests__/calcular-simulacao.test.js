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
                resposta: true,
              },
              {
                pergunta: 'Pergunta 1.1.b',
                requisitoSeloOuro: true,
                resposta: false,
              },
            ],
          },
          {
            nome: 'Topico 1.2',
            itens: [
              {
                pergunta: 'Pergunta 1.2.a',
                requisitoSeloOuro: false,
                resposta: false,
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
                resposta: false,
              },
            ],
          },
        ],
      },
    ];

    const resultado = calcularSimulacao(etapas, 1, 2, 3);

    expect(resultado.selo).toBe(3); // bronze
    expect(resultado.pontos).toBe(1);
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
                resposta: true,
              },
              {
                pergunta: 'Pergunta 1.1.b',
                requisitoSeloOuro: true,
                resposta: false,
              },
            ],
          },
          {
            nome: 'Topico 1.2',
            itens: [
              {
                pergunta: 'Pergunta 1.2.a',
                requisitoSeloOuro: false,
                resposta: true,
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
                resposta: false,
              },
            ],
          },
        ],
      },
    ];

    const resultado = calcularSimulacao(etapas, 1, 2, 3);

    expect(resultado.selo).toBe(2); // prata
    expect(resultado.pontos).toBe(2);
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
                resposta: true,
              },
              {
                pergunta: 'Pergunta 1.1.b',
                requisitoSeloOuro: true,
                resposta: false,
              },
            ],
          },
          {
            nome: 'Topico 1.2',
            itens: [
              {
                pergunta: 'Pergunta 1.2.a',
                requisitoSeloOuro: false,
                resposta: true,
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
                resposta: true,
              },
            ],
          },
        ],
      },
    ];

    const resultado = calcularSimulacao(etapas, 1, 2, 3);

    expect(resultado.selo).toBe(2); // prata
    expect(resultado.pontos).toBe(3);
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
                resposta: true,
              },
              {
                pergunta: 'Pergunta 1.1.b',
                requisitoSeloOuro: true,
                resposta: true,
              },
            ],
          },
          {
            nome: 'Topico 1.2',
            itens: [
              {
                pergunta: 'Pergunta 1.2.a',
                requisitoSeloOuro: false,
                resposta: false,
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
                resposta: true,
              },
            ],
          },
        ],
      },
    ];

    const resultado = calcularSimulacao(etapas, 1, 2, 3);

    expect(resultado.selo).toBe(1); // ouro
    expect(resultado.pontos).toBe(3);
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
                resposta: false,
              },
              {
                pergunta: 'Pergunta 1.1.b',
                requisitoSeloOuro: true,
                resposta: false,
              },
            ],
          },
          {
            nome: 'Topico 1.2',
            itens: [
              {
                pergunta: 'Pergunta 1.2.a',
                requisitoSeloOuro: false,
                resposta: false,
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
                resposta: false,
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
