import { useState, useEffect } from 'react'
import styles from '@/styles/heroSection.module.css'

const HeroSection = ({handleScrollToForm}) => {

    const [ topLogo, setTopLogo ] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        // Detectamos si el dispositivo es móvil
        if (typeof window !== "undefined") {
          const userAgent = navigator.userAgent || navigator.vendor || window.opera;
          if (/android/i.test(userAgent) || /iPhone|iPad|iPod/i.test(userAgent)) {
            setIsMobile(true);
          }
        }
      }, [])

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
                
                    
                <div className={styles.linksBTNcontainer}>
                    <a
                        href={isMobile ? "instagram://user?username=rocknroller.ar" : "https://www.instagram.com/rocknroller.ar"}
                        target="_blank"
                        className={styles.linkBTN}
                        title="Ir a Instagram"
                    >
                        <img
                            src="/igIcon.png"
                            alt="Ig Icon"
                        />
                        INSTAGRAM
                    </a>
                    <a href='https://www.facebook.com/rocknroller.ar/' target='_blank' className={styles.linkBTN} title="Ir a Facebook">
                        <img
                            src="/facebookIcon.png"
                            alt="Facebook Icon"
                        />
                        FACEBOOK
                    </a>
                    <a href='https://articulo.mercadolibre.com.ar/MLA-1471729385-picador-armador-conico-2-en-1-rockroller-_JM' target='_blank' className={styles.linkBTN} title="Link de compra">
                        <img
                            src="/buyIcon.png"
                            alt="Buy Icon"
                        />
                        LINK DE COMPRA
                    </a>
                </div>
            </div>
        </main>
    )
}

export default HeroSection