import producto1 from '../assets/images/img-vitalinea-griego.png'
import producto2 from '../assets/images/img-vitalinea-sin-azucar.png'
import producto3 from '../assets/images/img-vitalinea-bebible.png'
import fresa8 from '../assets/images/img-fresas-8@2x.png';
import fresa9 from '../assets/images/img-fresas-9.png';

function Products() {
  return (
    <div className="wp_productos">
        <div className="wp_content">
            <div className="wp_title">
                <h3 className="title_secondary">LA FAMILIA VITALÍNEA</h3>
            </div>
            <div className="wp_contentProductos">
                <div className="producto">
                    <img src={producto1} alt="Vitalínea Griego"/>
                    <p className="p_infoProdcuto">
                        Vitalínea Griego
                    </p>
                </div>
                <div className="producto">
                    <img src={producto2} alt="Vitalínea sin Azúcar" />
                    <p className="p_infoProdcuto">
                        Vitalínea sin Azúcar
                    </p>
                </div>
                <div className="producto">
                    <img src={producto3} alt="Vitalínea Bebible" />
                    <p className="p_infoProdcuto">
                        Vitalínea Bebible
                    </p>
                </div>
            </div>
            <div className="wp_fresasAbsolute">
                <img src={fresa8} alt="fresa8" id="fresa8"/>
                <img src={fresa9} alt="fresa9" id="fresa9"/>
            </div>
        </div>
    </div>
  );
}

export default Products;