import React from "react";
import Image from "next/image";

// @styled-component
import {
  Layout,
  MainLayout,
  Header,
  RoadmapContainer,
  RoadmapItem,
  Counter,
  Date,
  Detail,
  Icon,
} from "./Roadmap.styled";

// @component
import Container from "components/Container/Container";

// @assets
import RoadMapBg from "assets/png/RoadMap-bg.png";
import ActiveImage from "assets/png/Active.png";
import Roadmap from "assets/png/Roadmap.png";

// ----------------------------------------------------------

export default function index() {
  return (
    <Layout image={RoadMapBg.src} id="roadmap">
      <Container>
        <MainLayout>
          <Header>Roadmap</Header>
          <RoadmapContainer>
            <RoadmapItem>
              <Icon>
                <Image src={ActiveImage} layout="fill" alt="No Image" />
              </Icon>
              <div data-aos="fade-up">
                <Counter active={true}>01</Counter>
                <Date>Q3 2022</Date>
                <Detail>
                  ○ Mint first DungeoNEAR Dungeon Goblins NFT
                  <br />
                  <br />
                  ○ Get NFT verified on paras.id and set up NFT trade royalty
                  pool
                  <br />
                  <br />○ Release game design team & info
                </Detail>
              </div>
            </RoadmapItem>
            <RoadmapItem>
              <Icon>
                <Image src={Roadmap} layout="fill" alt="No Image" />
              </Icon>
              <div data-aos="fade-up">
                <Counter active={false}>02</Counter>
                <Date>Q4 2022</Date>
                <Detail>
                  ○ Release DungeoNEAR Updates
                  <br />
                  <br />
                  ○ Release staking platform
                  <br />
                  <br />○ Release DungeoNEAR mint platform and announce first
                  partnership characters.
                </Detail>
              </div>
            </RoadmapItem>
            <RoadmapItem>
              <Icon>
                <Image src={Roadmap} layout="fill" alt="No Image" />
              </Icon>
              <div data-aos="fade-up">
                <Counter active={false}>03</Counter>
                <Date>Q1 2023</Date>
                <Detail>
                  ○ Release first images of game
                  <br />
                  <br />
                  ○ Announce any new partnership characters.
                  <br />
                  <br /> ○ Mint partner character/s
                </Detail>
              </div>
            </RoadmapItem>
            <RoadmapItem>
              <Icon>
                <Image src={Roadmap} layout="fill" alt="No Image" />
              </Icon>
              <div data-aos="fade-up">
                <Counter active={false}>04</Counter>
                <Date>Q2 2023</Date>
                <Detail>
                  ○ DungeoNEAR Beta
                  <br />
                  <br />
                  ○ Partnerships with other NFT games.
                  <br />
                  <br />
                  ○ Mint partner character/s
                  <br />
                  <br />○ Release Creator Space Beta
                </Detail>
              </div>
            </RoadmapItem>

            <RoadmapItem end="true">
              <Icon>
                <Image src={Roadmap} layout="fill" alt="No Image" />
              </Icon>
              <div data-aos="fade-up">
                <Counter active={false}>05</Counter>
                <Date>Q3 2023</Date>
                <Detail>
                  ○ Playable partner characters
                  <br />
                  <br />○ Full DungeoNEAR game, mint platform/creator space and
                  marketplace.
                </Detail>
              </div>
            </RoadmapItem>
          </RoadmapContainer>
        </MainLayout>
      </Container>
    </Layout>
  );
}
