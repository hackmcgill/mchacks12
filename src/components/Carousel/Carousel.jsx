import React from "react"
import styled from "styled-components"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css/navigation"
import "swiper/css/bundle"

// import required modules
import { Navigation } from "swiper/modules"
import Individual from "../People/Individual"

const CarouselWrapper = styled.div`
  padding-bottom: 30px;
  .swiper-wrapper {
    align-items: center;
  }
`

function Carousel({ data }) {
  return (
    <CarouselWrapper>
      <Swiper
        modules={[Navigation]}
        navigation={data.length > 1}
        centeredSlides
        autoHeight
        breakpoints={{
          1400: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1085: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          800: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
        }}
      >
        {data.map((dataEntry) => {
          return (
            <SwiperSlide key={dataEntry.node.name}>
              <Individual
                key={dataEntry.node.name}
                image={dataEntry.node.imageLink}
                name={dataEntry.node.name}
                position={dataEntry.node.position}
                companyName={dataEntry.node.company}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </CarouselWrapper>
  )
}

export default Carousel
