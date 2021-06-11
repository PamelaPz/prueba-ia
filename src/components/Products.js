import producto1 from '../assets/images/img-vitalinea-griego.png'
import producto2 from '../assets/images/img-vitalinea-sin-azucar.png'
import producto3 from '../assets/images/img-vitalinea-bebible.png'

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
        </div>
    </div>
  );
}

export default Products;