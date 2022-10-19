function Chave({ numero, numeroCorreto }) {
  return (
    <p className={numero.valor === numeroCorreto ? 'green-bg' : ''}>
      {numero.valor}
    </p>
  );
}

export default Chave;
