export default function (
  etapas,
  pontosNecessariosParaSeloBronze,
  pontosNecessariosParaSeloPrata,
  pontosNecessariosParaSeloOuro,
) {
  const itensRespondidos = etapas.map(
    (etapa) => etapa.topicos.map(
      (topico) => topico.itens,
    ).flat(),
  ).flat();

  let simParaTodasDoSeloOuro = true;
  let pontos = 0;
  itensRespondidos.forEach((item) => {
    if (item.resposta === 'sim') {
      pontos += 1;
    }

    if (item.requisitoSeloOuro && item.resposta === 'nao') {
      simParaTodasDoSeloOuro = false;
    }
  });

  let selo = 0;
  if (pontos >= pontosNecessariosParaSeloBronze) {
    selo = 3;
  }
  if (pontos >= pontosNecessariosParaSeloPrata) {
    selo = 2;
  }
  if (pontos >= pontosNecessariosParaSeloOuro && simParaTodasDoSeloOuro) {
    selo = 1;
  }

  const numeroDePerguntas = etapas.reduce(
    (totalEtapa, etapa) => totalEtapa
      + etapa.topicos.reduce((totalTopico, topico) => totalTopico + topico.itens.length, 0),
    0,
  );

  pontos = Math.round((pontos * 100) / numeroDePerguntas);

  return {
    pontos,
    selo,
  };
}
