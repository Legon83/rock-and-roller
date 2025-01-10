import { useRef } from 'react'
import HeroSection from "@/components/HeroSection"
import Head from 'next/head'
import FormSection from "@/components/FormSection"
import CardsSection from "@/components/CardsSection"
import PromoSection from '@/components/PromoSection'
import WhatsAppSection from "@/components/WhatsAppSection"
import BottomSection from '@/components/BottomSection'
import VideoSection from '@/components/VideoSection'
import ProdResumeSection from '@/components/ProdResumeSection'



export default function Home() {

  const formSectionRef = useRef()

  const handleScrollToForm = () => {
    formSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  }


  return (
    <>
      <Head>
        <title>Rock&Roller</title>
        <meta name="description" content="El primer enrolador cónico de bolsillo" />
      </Head>
      <HeroSection handleScrollToForm={handleScrollToForm}/>
      <VideoSection/>
      <ProdResumeSection/>
      {/* <FormSection formSectionRef={formSectionRef}/>
      <CardsSection />
      <PromoSection/>
      <WhatsAppSection/>
      <BottomSection handleScrollToForm={handleScrollToForm}/> */}
      <footer>
        Rock&Roller
      </footer>

    </>
  )
}
