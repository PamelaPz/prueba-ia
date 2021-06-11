import logo from '../assets/images/img-logo-vitalinea.png';

function NavBar() {
  return (
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
  );
}

export default NavBar;