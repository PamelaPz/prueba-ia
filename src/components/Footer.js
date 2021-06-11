import imgDanone from '../assets/images/img-logo-danone.png';
import imgVitalinea from '../assets/images/img-logo-footer.png';

function Footer() {
  return (
    <div className="wp_footer">
        <div className="wp_headerF">
            <img src={imgDanone} alt="danone"/>
            <img src={imgVitalinea} alt="vitalinea"/>
        </div>
        <div className="wp_infoFooter">
            <p className="p_terminos">
                Términos y condiciones| Políticas de privacidad | Aviso de privacidad
            </p>
            <p className="p_derechos">
                Danone de México 2017 ©. Todos los derechos reservados 2017
            </p>
        </div>
    </div>
  );
}

export default Footer;