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
    if (item.resposta === true) {
      pontos += 1;
    }

    if (item.requisitoSeloOuro && item.resposta === false) {
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

  return {
    pontos,
    selo,
  };
}
