import './Header.css'
import darkThemeImg from '../assets/images/moon-o.svg'

const Header  = () =>{
    return(
        <header>
            <h1>Where in the world?</h1>
            <div class="dark-mode-div">
                <img src = {darkThemeImg} alt="moon icon" class="dark-mode-img"></img>
                <span class="dark-mode-text">Dark Mode</span>
            </div>
        </header>
    )
}

export default Header