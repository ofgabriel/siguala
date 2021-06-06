import { shallowMount } from '@vue/test-utils';
import Simulacao from '../src/views/Simulacao.vue';
import mockFormulario from './fixtures/formMock';

describe('Modelo de Simulação', () => {
  it('adiciona flags às etapas', () => {
    const wrapper = shallowMount(Simulacao);

    wrapper.setData({
      etapas: mockFormulario.input.etapas,
    });

    wrapper.vm.adicionaFlags();

    expect(wrapper.vm.etapas).toStrictEqual(
      mockFormulario.output.etapas,
    );
  });
});
