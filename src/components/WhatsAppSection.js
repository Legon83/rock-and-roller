import Link from "next/link"
import styles from '@/styles/whatsAppSection.module.css'

const WhatsAppSection = () => {
    return (
        <>
            <section className={styles.whatsAppSection}>
                <h2>CANAL DE CONSULTAS POR WHATSAPP LAS 24HRS</h2>
                <Link href={'https://api.whatsapp.com/send/?phone=542914417703'}>CONSULTAR POR WHATSAPP</Link>
                <p>Te damos asesoramiento por especialistas en seguridad de forma GRATUITA</p>
            </section>
            <Link href={'https://api.whatsapp.com/send/?phone=542914417703'} className={styles.whatsAppLogo}>
                <img src="/whatsApp-logo.png" alt="Logo WhatssApp" />
            </Link>
        </>
    )
}

export default WhatsAppSection