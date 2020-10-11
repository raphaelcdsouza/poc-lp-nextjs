export default function Home() {
  return (
    <>
      <div className="wrapper">
        <main>
          <img src="/logojlleimplementos.svg" height="90" alt="Logo Joinville Implementos"/>

          <h1>Quais são os principais benefícios do consórcio?</h1>

          <ul>
            <li>Sem juros</li>
            <li>Sem entrada</li>
            <li>Sem taxa de adesão</li>
            <li>Compra planejada</li>
          </ul>

          <p>A melhor maneira de <strong>renovar</strong> ou <strong>ampliar</strong> a sua frota é agora</p>
        </main>

        <aside>
          <p>Preencha os dados para receber um contato da nossa equipe!</p>
          <form>
            <label htmlFor="name">Nome</label>
            <input type="text" name="name" id="name"/>
            <label htmlFor="email">E-mail</label>
            <input type="text" name="email" id="email"/>
            <label htmlFor="phone">Telefone</label>
            <input type="text" name="phone" id="phone"/>
            <label htmlFor="state">Estado</label>
            <input type="text" name="state" id="state"/>
            <label htmlFor="city">Cidade</label>
            <input type="text" name="city" id="city"/>
            <button>Receber contato</button>
          </form>
          <span>Ao receber o conteúdo você concorda em receber materiais periódicos em seu e-mail.</span>
        </aside>
      </div>

      <footer>Conheça a Joinville implementos</footer>
    </>
  )
}
