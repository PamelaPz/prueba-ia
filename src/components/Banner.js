import productoYogurt from '../assets/images/img-bote-fresa@3x.png';
import imgAvalado from '../assets/images/img-sello-avalado@3x.png';
import imgCalorias from '../assets/images/img-100-kcal@3x.png';
import flechaScroll from '../assets/images/flecha.svg';
import fresa3 from '../assets/images/img-fresas-3.png';

function Banner() {
  return (
    <div className="wp_banner">
        <div className="wp_grid">
            <div className="wp_imgProducto">
                <img src={productoYogurt} alt="producto"/>
            </div>
            <div className="wp_btnSabores">
                <p className="p_sabor">Sabor:</p>
                <button className="btn_sabor p_saborBtn active">Fresa</button>
                <button className="btn_sabor p_saborBtn">Guayaba</button>
                <button className="btn_sabor p_saborBtn">Toronja</button>
            </div>
            <div className="wp_textInfo">
                <h3 className="title_primary">Vitalínea® Bebible Fresa 217 gr.</h3>
                <p className="p_infoLg">
                    ¡La presentación ideal para llevar contigo! Vitalínea bebible es la opción si eres de las personas que siempre están activas y quieren probar algo sano, rico y práctico.
                </p>
                <button className="btn_buy p_btnBuy">Comprar en Walmart</button>
            </div>
            <div className="wp_imgsAvalado">
                <div>
                    <img src={imgAvalado} alt="avalado"/>
                    <img src={imgCalorias} alt="calorias"/>
                </div>
            </div>
            <div className="wp_btnScroll">
                <button className="btn_scroll"><img src={flechaScroll} alt=""/></button>
            </div>
            <div className="wp_fresas">
                <img src={fresa3} alt="avalado"/>
            </div>
        </div>
        <div id="shapeBg"></div>
    </div>
  );
}

export default Banner;