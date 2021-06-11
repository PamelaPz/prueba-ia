import data from '../assets/data.json'

function InfoNutritional() {
  return (
    <div className="wp_infoNutri">
        <div className="wp_grid">
            <div className="wp_title">
                <h3 className="title_primary letterSpace">Información nutrimental</h3>
            </div>
            <div className="wp_textInfo">
                <div>
                    <p className="p_info">
                        Vitalínea® Bebible Guayaba 217gr
                    </p>
                    <p className="p_info">
                        Valor promedio por porción de 217gr
                    </p>
                    <p className="p_info">
                        Porciones por envase: 1
                    </p>
                </div>
                <p className="p_info reset_span">
                    <span>Ingredientes:</span>
                    Leche descremada pasteurizada y/o reconstituida pasteurizada de vaca. 3.5% preparado de fruta guayaba (acesulfame K y sucralosa (27.2mg/100g)), crema, almidón modificado, maltodextrina y cultivos lácticos.
                </p>
            </div>
            <div className="wp_tabla">
                <table cellspacing="0">
                    {
                        data.map( p => (
                            <tr className="wp_trTabla">
                                <td className="aling_l p_table">{p.name}</td>
                                <td className="aling_r p_table">{p.quantity}</td>
                            </tr>
                        ))
                    }
                </table>
            </div>
        </div>
    </div>
  );
}

export default InfoNutritional;