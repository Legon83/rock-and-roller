import Form from "@/components/Form"
import styles from '@/styles/formSection.module.css'

const FormSection = ({formSectionRef}) => {
    return (
        <section className={styles.formSection}>
            <div className={styles.col60}>
                <h2>SENTÍ LA <u>TRANQUILIDAD</u> DE SABER QUE TU FAMILIA Y TU CASA ESTAN PROTEGIDAS</h2>
                <ul>
                    <li>
                    <i className="material-icons">done</i>
                    SENSORES DE APERTURA DE PUERTAS Y VENTANAS
                    </li>
                    <li>
                    <i className="material-icons">done</i>
                    CÁMARAS IP PARA VER TODO DESDE TU CELULAR
                    </li>
                    <li>
                    <i className="material-icons">done</i>
                    BOTONES ANTIPÁNICO
                    </li>
                    <li>
                    <i className="material-icons">done</i>
                    SENSORES DE MOVIMIENTO Y MÁS...
                    </li>
                </ul>
                <img className={styles.kitSecurity} src='/securitySystem.png' alt="Sistemas de Seguridad"/>
                <img src='/logoADT.png' alt="ADT logo"/>
            </div>
            <div className={styles.col40}  ref={formSectionRef}>
                <h3>COMPLETÁ EL FORMULARIO</h3>
                <p>RECIBÍ TODA LA INFO</p>
                <Form/>
                <p>(Respuesta en minutos)</p>
            </div>
        </section>
    )
}

export default FormSection