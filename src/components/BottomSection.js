import styles from '@/styles/bottomSection.module.css'

const BottomSection = ({handleScrollToForm}) => {
    return (
        <section className={styles.bottomSection}>
            <div>
                <img src="/smart.png" alt="Smart" />
            </div>
            <div className={styles.bottomTextContainer}>
                <h4>Nuevo Sistema</h4>
                <h2>MIRÁ TODO LO QUE ESTÁ PASANDO EN TU CASA Y OFICINA DIRECTO DESDE TU CELULAR</h2>
                <p>Te damos la mejor tecnología para que puedas acceder remotamente y conocer lo que esta pasando en directo, desde la palma de tu mano</p>
                <button className={styles.askInfoBTN} onClick={handleScrollToForm}>PEDIR INFORMACIÓN</button>
            </div>
        </section>
    )
}

export default BottomSection