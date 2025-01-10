import Link from 'next/link'
import styles from '@/styles/heroSection.module.css'

const index = () => {
  return (
    <section className={styles.landingHero}>
        <Link href={'/'} className={styles.logoBar}>
          <div className={styles.logoContainer}>
            <img className={styles.logo} src="/logoNucleo.png" alt="Núcleo Security logo" />
            <img src="/textNucleo.png" alt="Núcleo Security texto" />
          </div>
        </Link>
        <div className={styles.heroText}>
            <h3>Recibimos tu mensaje</h3>
            <h1>¡GRACIAS!</h1>
            <h2>UN ESPECIALISTA DE NUESTRO EQUIPO SE PONDRÁ EN CONTACTO CON USTED A LA BREVEDAD.</h2>
        </div>
    </section>
  )
}

export default index