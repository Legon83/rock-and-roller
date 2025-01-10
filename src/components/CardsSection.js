import { useState, useEffect } from 'react'
import cards from '@/styles/cardsSection.module.css'

const CardsSection = () => {

    const [ showCard1, setShowCard1 ] = useState(false);
    const [ showCard2, setShowCard2 ] = useState(false);
    const [ showCard3, setShowCard3 ] = useState(false);
    const [screenWidth, setScreenWidth] = useState(typeof window !== 'undefined' && window.innerWidth)

    const updateScreenWidth = () => {
        setScreenWidth(window.innerWidth);
    };

    useEffect(() => {
        updateScreenWidth();
    
        // Agregar event listener para escuchar cambios en el tamaño de la ventana
        window.addEventListener('resize', updateScreenWidth);
    
        // Limpiar el event listener al desmontar el componente
        return () => {
          window.removeEventListener('resize', updateScreenWidth);
        };
    }, []);
    
    
/* ---- Show and hide logo when scroll ---- */

    const showSection = () => {
        if(screenWidth < 851) {
            if(window.scrollY >= 1900){
                setShowCard1(true);
            }
            if(window.scrollY >= 2300){
                setShowCard2(true);
            }
            if(window.scrollY >= 2700){
                setShowCard3(true);
            }
        } 
        if(screenWidth > 851 && window.scrollY >= 1200) setShowCard1(true)
        
        if(screenWidth > 851 && window.scrollY >= 1300) setShowCard2(true)
        
        if(screenWidth > 851 && window.scrollY >= 1400) setShowCard3(true)
        
    }; 


    if (typeof window !== 'undefined') {
        window.addEventListener('scroll', showSection);
      }

    return (
        <section className={cards.cardsSection}>
            <h2>SENTÍ TRANQUILIDAD</h2>
            <h4>ASESORAMIENTO PERSONALIZADO Y GRATUITO EN TODO EL PAÍS</h4>
            <div className={cards.cardsContainer}>
            <div className={`${cards.card} ${showCard1 && cards.active}`}>
                <img src="/Proteccion01.png" alt="Asistencia" />
            </div>
            <div className={`${cards.card} ${showCard2 && cards.active}`}>
                <img src="/Proteccion02.png" alt="Nueva tecnología" />
            </div>
            <div className={`${cards.card} ${showCard3 && cards.active}`}>
                <img src="/Proteccion03.png" alt="Seguridad" />
            </div>
            </div>
        </section>
    )
}

export default CardsSection
