import React, { useRef, useEffect } from "react"

import SEO from "../components/SEO/SEO"
import Nav from "../components/Nav/Nav"
import Hero from "../components/Hero/Hero"
import About from "../components/About/About"
import Sponsor from "../components/Sponsor/Sponsor"
import FAQ from "../components/FAQ/FAQ"
import Logos from "../components/Logos/Logos"
import Footer from "../components/Footer/Footer"
import EventInfo from "../components/EventInfo/EventInfo"

import CarouselSpeaker from "../components/Carousel/CarouselSpeaker"
import CarouselMentorAndJudges from "../components/Carousel/CarouselMentorAndJudges"
import CarouselRecruiter from "../components/Carousel/CarouselRecruiter"

const scrollTo = (ref, offset = 100) => {
  if (ref.current) {
    window.scrollTo({
      top: ref.current.offsetTop - offset,
      behavior: 'smooth',
    });
  }
};

const IndexPage = () => {
  const aboutRef = useRef(null)
  const sponsorRef = useRef(null)
  const faqRef = useRef(null)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' }, 0);
  }, []);

  return (
    <div>
      <SEO />
      <Nav
        scrollToAbout={() => scrollTo(aboutRef)}
        scrollToSponsor={() => scrollTo(sponsorRef, -150)}
        scrollToFaq={() => scrollTo(faqRef, 0)}
        darkBackground={true}
      />
      <Hero />
      <About scrollRef={aboutRef} />
      <EventInfo />
      <Sponsor scrollRef={sponsorRef} />
      <FAQ scrollRef={faqRef} />
      <CarouselSpeaker />
      <CarouselRecruiter />
      <CarouselMentorAndJudges />
      <Logos />
      <Footer />
    </div>
  )
}

export default IndexPage
