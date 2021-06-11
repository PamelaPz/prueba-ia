import logo from '../assets/images/img-logo-vitalinea.png';
import fresa2 from '../assets/images/img-fresas-2.png';
import fresa5 from '../assets/images/img-fresas-5.png';
import fresa3 from '../assets/images/img-fresas-3.png';
import facebok from '../assets/images/img-social-facebook.svg';
import instagram from '../assets/images/img-social-instagram.svg';
import youtube from '../assets/images/img-social-youtube.svg';

function NavBar() {
  return (
    <div className="wp_nabvarFull">
        <div className="wp_nabvar">
            <nav>
                <div className="wp_logo">
                    <img src={logo} alt="logo"/>
                </div>
                <ul className="wp_list">
                    <li>
                        <div className="menu_bars">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </li>
                    <div className="menu_show">
                        <li>
                            <a href="/">Nuestros productos</a>
                        </li>
                        <li>
                            <a href="/">Disfruta cuidarte</a>
                        </li>
                        <li>
                            <a href="/">Blog</a>
                        </li>
                        <li className="social_media">
                            <ul>
                                <li><img src={facebok} alt="social"/></li>
                                <li><img src={instagram} alt="social"/></li>
                                <li><img src={youtube} alt="social"/></li>
                            </ul>
                        </li>
                    </div>
                </ul>
            </nav>
        </div>
        <div className="wp_fresasAbsolute">
            <img src={fresa2} alt="fresa2" id="fresa2"/>
            <img src={fresa5} alt="fresa5" id="fresa5"/>
            <img src={fresa3} alt="fresa3" id="fresa3"/>
        </div>
    </div>
  );
}

export default NavBar;