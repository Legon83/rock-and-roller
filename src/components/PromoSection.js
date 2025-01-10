import styles from '@/styles/promoSection.module.css'

const PromoSection = () => {
  return (
    <div className={styles.promoSection}>
        <img src="/promo1.jpg" alt="Promo 1"/>
        <img src="/promo2.jpg" alt="Promo 2"/>
        <img src="/promo3.jpg" alt="Promo 3"/>
    </div>
  )
}

export default PromoSection