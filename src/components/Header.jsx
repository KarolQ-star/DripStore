import "./Header.css"
import Logo from '../assets/Img/logo.png'
import Imagem from'../assets/Img/image.png'

export default function Header() {
    return (
      <div className="Duvidoso">
        <img className="Imagem1" src={Logo} alt=''/>
          <input className="pesquisa" type="text" name="nome" value="" placeholder="Pesquisar produto..." />
        <div className="Links">
            <a className="link1" href="#">Cadastre-se</a>
            <a className="link2" href="#">Entrar</a>
            <img className="Imagem2" src={Imagem} alt=''/>
        </div>
      </div>
    )
}

