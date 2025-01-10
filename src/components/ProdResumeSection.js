import styles from '@/styles/prodResume.module.css'

const ProdResumeSection = () => {
  return (
    <div className={styles.prodResume}>
        <div className={styles.resumeTextContainer}>
          <h2 className={styles.resumeText}>Una solución compacta para picar y enrolar</h2>
          <h3 className={styles.resumeText}>Picado uniforme, distribución perfecta y portabilidad total.<br/>
            Lleva rock&roller a todas partes y disfruta de su 
            practicidad.
          </h3>
        </div>
        <div className={styles.resumeIMGcontainer}>
          <img className={styles.logo} src="/dismantling.png" alt="Rock&Roller logo" />
        </div>
    </div>
  )
}

export default ProdResumeSection