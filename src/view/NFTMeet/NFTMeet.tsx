import React from "react";
import Image from "next/image";

// @styled-components

import {
  Layout,
  Text,
  TextColor,
  SwiperContainer,
  TextContainer,
  SwiperLayout,
  Letter,
  ImageContainer,
} from "./NFTMeet.styled";

// @swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

// @assets
import Image1 from "assets/png/swiper1.png";
import Image2 from "assets/png/swiper2.png";
import Image3 from "assets/png/swiper3.png";
import Image4 from "assets/png/swiper4.png";
import Image5 from "assets/png/swiper5.png";
import Image6 from "assets/png/swiper6.png";
import Image7 from "assets/png/swiper7.png";
import Image8 from "assets/png/swiper8.png";
import Activebg from "assets/png/Active-bg.png";

// ----------------------------------------------------------

export default function index() {
  return (
    <Layout>
      <SwiperLayout>
        <TextContainer data-aos="fade-down">
          <Text>Meet with some of</Text>
          <TextColor>Dungeon Goblins</TextColor>
        </TextContainer>
        <SwiperContainer image={Activebg.src} data-aos="fade-up">
          <Swiper
            modules={[Pagination, Autoplay]}
            loop={true}
            slidesPerView={1}
            breakpoints={{
              "1300": {
                slidesPerView: 6,
              },
              "500": {
                slidesPerView: 2,
              },
              "768": {
                slidesPerView: 3,
              },
              "1024": {
                slidesPerView: 4,
              },
              "1200": {
                slidesPerView: 5,
              },
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            centeredSlides={true}
          >
            <SwiperSlide>
              {({ isActive }: any) => (
                <ImageContainer isActive={isActive}>
                  <Image
                    src={Image1.src}
                    alt="No Image"
                    width={220}
                    height={220}
                  />
                  {isActive && <Letter>Dungeon Goblin #1111</Letter>}
                </ImageContainer>
              )}
            </SwiperSlide>
            <SwiperSlide>
              {({ isActive }: any) => (
                <ImageContainer isActive={isActive}>
                  <Image
                    src={Image2.src}
                    alt="No Image"
                    width={220}
                    height={220}
                  />
                  {isActive && <Letter>Dungeon Goblin #2222</Letter>}{" "}
                </ImageContainer>
              )}
            </SwiperSlide>
            <SwiperSlide>
              {({ isActive }: any) => (
                <ImageContainer isActive={isActive}>
                  <Image
                    src={Image3.src}
                    alt="No Image"
                    width={220}
                    height={220}
                  />
                  {isActive && <Letter>Dungeon Goblin #3333</Letter>}{" "}
                </ImageContainer>
              )}
            </SwiperSlide>
            <SwiperSlide>
              {({ isActive }: any) => (
                <ImageContainer isActive={isActive}>
                  <Image
                    src={Image4.src}
                    alt="No Image"
                    width={220}
                    height={220}
                  />
                  {isActive && <Letter>Dungeon Goblin #4444</Letter>}{" "}
                </ImageContainer>
              )}
            </SwiperSlide>
            <SwiperSlide>
              {({ isActive }: any) => (
                <ImageContainer isActive={isActive}>
                  <Image
                    src={Image5.src}
                    alt="No Image"
                    width={220}
                    height={220}
                  />
                  {isActive && <Letter>Dungeon Goblin #5555</Letter>}{" "}
                </ImageContainer>
              )}
            </SwiperSlide>
            <SwiperSlide>
              {({ isActive }: any) => (
                <ImageContainer isActive={isActive}>
                  <Image
                    src={Image6.src}
                    alt="No Image"
                    width={220}
                    height={220}
                  />
                  {isActive && <Letter>Dungeon Goblin #6666</Letter>}
                </ImageContainer>
              )}
            </SwiperSlide>
            <SwiperSlide>
              {({ isActive }: any) => (
                <ImageContainer isActive={isActive}>
                  <Image
                    src={Image7.src}
                    alt="No Image"
                    width={220}
                    height={220}
                  />
                  {isActive && <Letter>Dungeon Goblin #7777</Letter>}{" "}
                </ImageContainer>
              )}
            </SwiperSlide>
            <SwiperSlide>
              {({ isActive }: any) => (
                <ImageContainer isActive={isActive}>
                  <Image
                    src={Image8.src}
                    alt="No Image"
                    width={220}
                    height={220}
                  />
                  {isActive && <Letter>Dungeon Goblin #8888</Letter>}{" "}
                </ImageContainer>
              )}
            </SwiperSlide>
          </Swiper>
        </SwiperContainer>
      </SwiperLayout>
    </Layout>
  );
}
