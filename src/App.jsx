import './App.css'
import Logo from './assets/logo/patolildo-indicador.png'

const links = [
  {
    label: 'Aspirador de pó portátil',
    url: 'https://s.shopee.com.br/AA9no4RdR0',
  },
  {
    label: 'Liquidificador portátil recarregável',
    url: 'https://s.shopee.com.br/1LYPI2TXpa',
  },
]

function App() {
  return (
    <div className="page">
      <div className="card">
        {/* TOPO / BRANDING */}
        <header className="logo">
          <img
            src={Logo}
            className="imagem-patolildo"
            alt="Patolildo indicador"
          />
          <div className="texts">
            <h1 className="title">Patolildo indicador</h1>
            <p className="subtitle">Pato que indica</p>
          </div>
        </header>

        {/* BLOCO DE LINKS */}
        <main className="links">
          <p className="links-title">Produtos aprovados no bico 🐤</p>
          <p className="links-subtitle">
            Clique no produto do vídeo e finalize sua compra com segurança.
          </p>

          {links.map(link => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-button"
            >
              <span className="link-label">{link.label}</span>
            </a>
          ))}
        </main>

        {/* RODAPÉ */}
        <footer className="footer">
          © {new Date().getFullYear()} Patolildo indicador
        </footer>
      </div>
    </div>
  )
}

export default App
