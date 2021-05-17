export default {
  etapas: [
    {
      numero: 1,
      nome: 'Aceite da Verificação',
      descricao: 'Alguma descrição dessa etapa',
      respondida: false,
      visitada: true,
      topicos: [
        {
          nome: 'Contrato',
          itens: [
            {
              pergunta: 'Você confirma ter lido e concordado com todos os termos do contrato de compromisso de adesão?',
              requisitoSeloOuro: false,

            },
          ],
        },
      ],
    },
    {
      numero: 2,
      nome: 'Equipe de Implementação',
      descricao: 'Alguma descrição dessa etapa',
      respondida: false,
      visitada: false,
      topicos: [
        {
          nome: 'Criação',
          itens: [
            {
              pergunta: 'Você criará a Equipe de Implementação do Selo de Igualdade de Gênero?',
              requisitoSeloOuro: true,
            },
            {
              pergunta: 'A Equipe será composta por colaboradores e colaboradoras da empresa com um(a) coordenador(a) designado(a) pela Direção?',
              requisitoSeloOuro: false,
            },
            {
              pergunta: 'A Equipe contará com autoridade e recursos para conduzir as atividades?',
              requisitoSeloOuro: false,
            },
          ],
        },
        {
          nome: 'Composição',
          itens: [
            {
              pergunta: 'A empresa contará com uma pessoa especialista em questões de gênero que pertence à Equipe de Implementação?',
              requisitoSeloOuro: true,
            },
          ],
        },
      ],
    },
    {
      numero: 3,
      nome: 'Análise da Empresa',
      descricao: 'Alguma descrição dessa etapa',
      respondida: false,
      visitada: false,
      topicos: [
        {
          nome: 'Análise organizacional com perspectiva de gênero',
          itens: [
            {
              pergunta: 'A Equipe de Implementação realizou a análise da empresa?',
              requisitoSeloOuro: false,
            },
            {
              pergunta: 'A empresa possui comitês ou ouvidoria de combate ao assédio e discriminação de gênero em suas diversas formas?',
              requisitoSeloOuro: true,
            },
            {
              pergunta: 'Já existe alguma política de igualdade de gênero implementada na empresa?',
              requisitoSeloOuro: true,
            },
          ],
        },
        {
          nome: 'Componentes da análise organizacional com perspectiva de gênero',
          itens: [
            {
              pergunta: 'Foram identificadas e descritas boas práticas no ambiente de trabalho já existentes na empresa em relação às questões de gênero?',
              requisitoSeloOuro: false,
            },
            {
              pergunta: 'Foram identificadas práticas discriminatórias diretas e/ou indiretas?',
              requisitoSeloOuro: false,
            },
          ],
        },
      ],
    },
    {
      numero: 4,
      nome: 'Plano de Ação',
      descricao: 'Alguma descrição dessa etapa',
      respondida: false,
      visitada: false,
      topicos: [
        {
          nome: 'Plano de Ação Organizacional com Perspectiva de Gênero',
          itens: [
            {
              pergunta: 'Será elaborado um plano de ação organizacional pela equipe de implementação com perspectiva de gênero?',
              requisitoSeloOuro: true,
            },
            {
              pergunta: 'Os representantes das áreas dos setores de Recursos Humanos e de Sistemas de Gestão participaram participarão do plano?',
              requisitoSeloOuro: true,
            },
            {
              pergunta: 'Este plano de ação contará com diretrizes estratégicas orientadas a diminuir as desigualdades de gênero?',
              requisitoSeloOuro: true,
            },
            {
              pergunta: 'Serão estabelecidas metas de progresso ou adoção de práticas e procedimentos para equidade de gênero?',
              requisitoSeloOuro: true,
            },
          ],
        },
      ],
    },
    {
      numero: 5,
      nome: 'Política de Igualdade de Gênero',
      descricao: 'Alguma descrição dessa etapa',
      respondida: false,
      visitada: false,
      topicos: [
        {
          nome: 'Elaboração da Política de Igualdade de Gênero',
          itens: [
            {
              pergunta: 'Será elaborada política de igualdade de gênero na empresa?',
              requisitoSeloOuro: true,
            },
            {
              pergunta: 'A política adotada tem diretrizes estratégicas orientadas a diminuir as desigualdades de gênero?',
              requisitoSeloOuro: true,
            },
          ],
        },
        {
          nome: 'Requisitos para a Política de Igualdade de Gênero',
          itens: [
            {
              pergunta: 'Essa política estará em concordância com o Código de Ética da Empresa e as Metas de Governança?',
              requisitoSeloOuro: true,
            },
            {
              pergunta: 'A direção da empresa ou alta gerência registrará o compromisso com a política adotada por meio de documento?',
              requisitoSeloOuro: true,
            },
            {
              pergunta: 'A política irá prever ações que promovam a diversidade de colaboradores e colaboradoras da empresa?',
              requisitoSeloOuro: true,
            },
          ],
        },
        {
          nome: 'Responsabilidade da Direção/Alta-gerência pela Política de Igualdade de Gênero',
          itens: [
            {
              pergunta: 'A política será difundida entre todos os colaboradores e colaboradoras da empresa?',
              requisitoSeloOuro: true,
            },
            {
              pergunta: 'A direção da empresa ou alta gerência será responsável por dar continuidade na aplicação da política de igualdade de gênero?',
              requisitoSeloOuro: true,
            },
          ],
        },
        {
          nome: 'Política de Igualdade de Gênero para garantia de oportunidades',
          itens: [
            {
              pergunta: 'A empresa se compromete em difundir de forma igualitária, entre homens e mulheres, as oportunidades e critérios de admissão na empresa?',
              requisitoSeloOuro: true,
            },
            {
              pergunta: 'A empresa se compromete em não empregar linguagem sexista nos processos de contratação de pessoal?',
              requisitoSeloOuro: true,
            },
            {
              pergunta: 'A empresa se compromete em incorporar critérios de capacidade profissional e experiência técnica na seleção de colaboradores(as)?',
              requisitoSeloOuro: true,
            },
            {
              pergunta: 'A empresa contemplou critérios que não reproduzem papéis tradicionalmente designados para homens e mulheres?',
              requisitoSeloOuro: true,
            },
            {
              pergunta: 'A empresa desenvolve perfis de trabalho com base nas características da própria vaga sem adoção de critérios sexistas?',
              requisitoSeloOuro: true,
            },
            {
              pergunta: 'A empresa se compromete em dar promoção aos colaboradores(as) em função de suas competências técnicas e de mérito?',
              requisitoSeloOuro: true,
            },
            {
              pergunta: 'A empresa se compromete em estabelecer políticas de promoção transparentes?',
              requisitoSeloOuro: true,
            },
            {
              pergunta: 'A empresa se compromete em evitar o uso de critérios de promoção que favoreçam os candidatos de gênero masculino e/ou que favoreçam a ocupação masculina sobre a feminina?',
              requisitoSeloOuro: true,
            },
            {
              pergunta: 'A empresa disponibiliza canais de denúncia para todos os colaboradores e colaboradoras ?',
              requisitoSeloOuro: true,
            },
            {
              pergunta: 'A empresa se compromete em fomentar o desenvolvimento de um plano de carreira igualitário para as mulheres com apoio da gerência?',
              requisitoSeloOuro: true,
            },
            {
              pergunta: 'A empresa se compromete em estipular que a gerência executiva inclua um determinado percentual de colaboradoras na sua lista de sucessão?',
              requisitoSeloOuro: true,
            },
          ],
        },
        {
          nome: 'Capacitação para a Política de Igualdade de Gênero',
          itens: [
            {
              pergunta: 'A empresa se compromete em incorporar oficinas de gênero e mecanismos de prevenção das diversas modalidades de assédio e discriminação nos processos de capacitação?',
              requisitoSeloOuro: true,
            },
            {
              pergunta: 'A empresa se compromete em não discriminar colaboradoras em processo de capacitação?',
              requisitoSeloOuro: true,
            },
          ],
        },
        {
          nome: 'Política Para Eliminar o Assédio Sexual e Moral no Trabalho',
          itens: [
            {
              pergunta: 'A empresa registra, acompanha e processa queixas e denúncias sobre violências e/ou assédio?',
              requisitoSeloOuro: true,
            },
            {
              pergunta: 'A empresa implementa mecanismos para resolver esse tipo de conflito respeitando a vulnerabilidade das pessoas afetadas?',
              requisitoSeloOuro: true,
            },
            {
              pergunta: 'A empresa incorpora medidas preventivas e corretivas em relação a assédio sexual e moral nos contratos de trabalho, indicando os mecanismos de denúncia existentes na empresa?',
              requisitoSeloOuro: true,
            },
          ],
        },
        {
          nome: 'Promoção de imagem não sexista de empresa que respeita a igualdade',
          itens: [
            {
              pergunta: 'A empresa irá incorporar em sua estratégia de comunicação critérios para que a imagem pública e a comunicação externa não transmitam estereótipos de gênero?',
              requisitoSeloOuro: true,
            },
          ],
        },
      ],
    },
  ],
};
