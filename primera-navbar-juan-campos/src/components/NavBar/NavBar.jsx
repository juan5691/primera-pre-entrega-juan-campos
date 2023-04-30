import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'


const NavBar = () => {
  return (
    <header>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDeZvlpN6_TlgT-U68pgOMBjt5wojUBXrENcAf_A5Bha0JeMpJUAbm1V2jJt_2FhCUD8Y&usqp=CAU" alt="" /> 
      <h2>MusicStore</h2>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
           Vinilos
          </li>
          <li className="nav-item">
            Discos Shellac
          </li>
          <li className="nav-item">
            MP3
          </li>
          <li className="nav-item">
            Flac
          </li>
        </ul>
      </div>
      <span>
      <CartWidget/>
      </span>
      </div>
  </nav>
  </header> 


  )
}

export default NavBar