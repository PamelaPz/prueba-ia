import logo from '../assets/images/img-logo-vitalinea.png';
import fresa2 from '../assets/images/img-fresas-2.png';
import fresa5 from '../assets/images/img-fresas-5.png';

function NavBar() {
  return (
    <>
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
            </ul>
        </nav>
    </div>
    <div className="wp_fresasAbsolute">
        <img src={fresa2} alt="fresa2" id="fresa2"/>
        <img src={fresa5} alt="fresa5" id="fresa5"/>
    </div>
    </>
  );
}

export default NavBar;