import  "../footer/footer.css"

function Footer(){
    return(
        <footer className="footer">
            <div className="membership" >
             <div className="member">
                <h1>LA HISTORIA CONTINÚA... </h1>
            <p>SUSCRÍBETE Y ENTÉRATE DE LANZAMIENTOS EXCLUSIVOS, NUEVAS COLECCIONES Y DESCUENTOS ESPECIALES. ¡Recibe 15% OFF EN TU PRIMERA COMPRA!</p>
            <form>
                <div className="form">
                <div>
                <label>Nombres y apellidos</label><br/>
                <input/>
                </div>
                <div>
                <label>Correo electrónico</label><br/>
                <input/>
                </div>
                <div>
                <label>Celular</label><br/>
                <input/>
                </div>
                <div>
                   <label>Número de documento</label><br/>
                   <input/>
                </div>
                </div>

                <div >
                    <p>Te interesa productos para</p>
                    <input type="checkbox"/>
                    <label>Mujer</label>
                    <input type="checkbox"/>
                    <label>Hombre</label>
                    <input type="checkbox"/>
                    <label>Aceptas Tratamiento de Datos Personales y Términos y Condiciones</label>
                </div>
                 </form>
                </div>
            
            </div>

            <div className="bank">
                <img src="https://moviesshopco.vteximg.com.br/arquivos/medios-de-pago-mic-footer.png"/>
            </div>
            
            <div className="contact">
                <div>
                    <h5>SIGUENOS</h5>
                    <h5>CONTACTANOS</h5>
                    <p>servicioalcliente@moviesshop.co</p>
                    <p>+57 300 910 8311</p>
                    <p>NUESTRAS TIENDAS</p>
                </div>
                <div>
                    <h5>TE AYUDAMOS</h5>
                    <p>Preguntas frecuentes</p>
                    <p>Garantía de productos</p>
                    <p>Cambios y devoluciones</p>
                    <p>Contáctanos</p>

                </div>
                <div>
                    <h5>INFORMACIÓN LEGAL</h5>
                    <p>Modificar mi suscripción</p>
                    <p>Términos y condiciones recoge en tienda física</p>
                    <p>Términos y condiciones uso sitio web</p>
                    <p>Política de tratamiento de la información personal</p>
                    <p>Términos y condiciones promociones</p>
                    <p>Derecho de retracto</p>
                    <p>Superintendencia Industria y Comercio - SIC</p>
                    <p>Autorización tratamiento de datos</p>
                    <p>Transparencia y Ética Empresarial</p>
                </div>
                <div>
                    <h5>MI CUENTA</h5>
                    <p>Iniciar sesion</p>
                    <p>Rastrea pedido</p>
                </div>
                <div>
                    <h5>ACERCA DE MOVILES</h5>
                    <p>Nuestra historia</p>
                    <p>Trabaja con nosotros</p>
                </div>
            </div>

        </footer>
    )
}

export default Footer