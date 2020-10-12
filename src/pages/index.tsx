export default function Home() {
  return (
    <div className="wrapper">
      <div className="content">
        <main>
          <img src="/logojlleimplementos.svg" height="89.67" width="350" alt="Logo Joinville Implementos"/>

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
            <input type="text" name="name" id="name" placeholder="Ex.: João da Silva" />
            <label htmlFor="email">E-mail</label>
            <input type="text" name="email" id="email" placeholder="Ex.: joao@silva.com.br" />
            <label htmlFor="phone">Telefone</label>
            <input type="text" name="phone" id="phone" placeholder="DDD + número" />
            <label htmlFor="state">Estado</label>
            <input type="text" name="state" id="state" placeholder="Ex.: Santa Catarina" />
            <label htmlFor="city">Cidade</label>
            <input type="text" name="city" id="city" placeholder="Ex.: Joinville" />
            <button>Receber contato</button>
          </form>
          <small>Ao receber o conteúdo você concorda em receber materiais periódicos em seu e-mail.</small>
        </aside>
      </div>

      <footer><a href="https://www.joinvilleimplementos.com.br">Conheça a Joinville implementos</a></footer>
    </div>
  )
}
