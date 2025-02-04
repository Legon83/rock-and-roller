import { useState } from 'react'
import styles from '@/styles/heroSection.module.css'

const HeroSection = ({handleScrollToForm}) => {

    const [ topLogo, setTopLogo ] = useState(false)

    const moveLogoToTop = () => {
        if(window.scrollY >= 100){
        setTopLogo(true);
        } else {
        setTopLogo(false)
        }
    }

    if (typeof window !== 'undefined') {
        // El código que usa window, como event listeners, aquí.
        window.addEventListener('scroll', moveLogoToTop);
    }

    return (
        <main>
            <div className={styles.mainMenu}>
                <ul>
                   <li>PÁGINA EN DESARROLLO</li>
                    {/*  <li>CONTACTO</li>I
                    <li>TIENDA</li> */}
                </ul>
            </div>
            <div className={`${styles.logoBar} ${topLogo && styles.active}`}>
                <div className={`${styles.logoContainer} ${topLogo && styles.active}`}>
                    <img className={styles.logo} src="/Rock&RollerLogo.png" alt="Rock&Roller logo" />
                </div>
            </div>
            <img src="/productPNG.png" className={styles.productIMG} alt="Rock&Roller" />
            <div  className={styles.landingHero}>
                <div className={styles.heroText}>
                    <h2>Precisión y portabilidad al alcance de tu mano...</h2>
                    <h3>El primer enrolador cónico de bolsillo</h3>
                </div>
                {/* <button className={styles.askInfoBTN} onClick={handleScrollToForm}>COMPRAR AHORA<br/>Próximamente!</button> */}
                
                    
                <div>
                    <a href="instagram://user?username=rocknroller.ar" className={styles.askInfoBTN} title="Ir a Instagram">
                        <img
                            src="/igIcon.png"
                            alt="Ig Icon"
                        />
                        INSTAGRAM
                    </a>
                    <a href='https://www.facebook.com/rocknroller.ar/' target='_blank' className={styles.askInfoBTN} title="Ir a Facebook">
                        <img
                            src="/facebookIcon.png"
                            alt="Facebook Icon"
                        />
                        FACEBOOK
                    </a>
                    {/* <a href='https://linkedIn/showtechroom.com' target='_blank' className={styles.askInfoBTN}>
                        <img
                            src="/youtubeIcon.png"
                            alt="YouTube Icon"
                            title="Ir a YouTube"
                        />
                        YOUTUBE
                    </a> */}
                </div>
            </div>
        </main>
    )
}

export default HeroSection