
function MenuModal({show}) {
    const showHideClassName = show ? "wp_menuMobile display-block" : "wp_menuMobile display-none";

    return(
        <div className={showHideClassName}>
            <div className="wp_whidthMenu">
                <ul>
                    <li className="p-menu"> <a href="/">Nuestros productos</a> </li>
                    <li className="p-menu"> <a href="/">Disfruta cuidarte</a> </li>
                    <li className="p-menu"> <a href="/">Blog</a> </li>
                </ul>
            </div>
        </div>

    );
}

export default MenuModal; 