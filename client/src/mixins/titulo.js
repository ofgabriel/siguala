function getTitulo(vm) {
  const { titulo } = vm.$options;
  if (titulo) {
    return typeof titulo === 'function'
      ? titulo.call(vm)
      : titulo;
  }

  return null;
}

export default {
  created() {
    const titulo = getTitulo(this);
    if (titulo) {
      document.title = titulo;
    }
  },
};
