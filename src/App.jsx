import './App.css'
import Logo from './assets/logo/patolildo-indicador.png'

const links = [
  {
    label: 'Aspirador de pó',
    url: '',
    description: 'Falou em aspirador portátil?',
  },
  {
    label: 'Liquidificador portátil recarregavel',
    url: '',
    description: 'Muito prático e portátil',
  },
]

function App() {
  return (
    <div className="page">
      <div className="logo">
        <img src={Logo} className="imagem-patolildo" />
        <div className="texts">
          <h1 className="title">Patolildo indicador</h1>
          <p className="subtitle">
            O pato de oculos que testa e indica
            <br /> os melhores produtos.
          </p>
        </div>
      </div>

      <div className="links">
        <p className="links-title">
          Aqui você encontra
          <br /> os <strong>melhores produtos!</strong>
        </p>
        {links.map(link => (
          <a
            key={link}
            href={link.url}
            target="_blank"
            rel="noopeer noreferrer"
            className="link-button"
          >
            <div className="link-texts">
              <p className="link-label">{link.label}</p>
              {link.description && (
                <p className="link-description">{link.description}</p>
              )}
            </div>
          </a>
        ))}
      </div>

      <p className="footer">© {new Date().getFullYear()} Patolildo indicador</p>
    </div>
  )
}

export default App
