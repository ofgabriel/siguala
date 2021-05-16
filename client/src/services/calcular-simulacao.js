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

  let selo = null;
  if (pontos >= pontosNecessariosParaSeloBronze) {
    selo = 'bronze';
  }
  if (pontos >= pontosNecessariosParaSeloPrata) {
    selo = 'prata';
  }
  if (pontos >= pontosNecessariosParaSeloOuro && simParaTodasDoSeloOuro) {
    selo = 'ouro';
  }

  return {
    pontos,
    selo,
  };
}
