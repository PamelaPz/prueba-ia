import imgDanone from '../assets/images/img-logo-danone.png';
import imgVitalinea from '../assets/images/img-logo-footer.png';

function Footer() {
  return (
    <div className="wp_footer">
        <div className="wp_img1">
            <img src={imgDanone} alt="danone"/>
        </div>
        <div className="wp_img2">
            <img src={imgVitalinea} alt="vitalinea"/>
        </div>
        <div className="wp_infoFooter">
            <p className="p_terminos">
                <span>Términos y condiciones</span> | <span>Políticas de privacidad</span> | <span>Aviso de privacidad</span>
            </p>
            <p className="p_derechos">
                Danone de México 2017 ©. Todos los derechos reservados 2017
            </p>
        </div>
    </div>
  );
}

export default Footer;