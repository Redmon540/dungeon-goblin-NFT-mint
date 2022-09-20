import React from "react";
import Image from "next/image";

// @styled-component
import {
  Layout,
  Background,
  MainLayout,
  TextContainer,
  Text,
  MarginText,
  Row,
  Network,
  ImageContainer1,
  ImageContainer2,
  Imagelayout,
  FollowContainer,
  MobileFollowTitle,
  FollowImageContainer,
  FollowImage,
  FollowTextContainer,
  FollowTitle,
  FollowText,
} from "./Network.styled";

// @component
import Container from "components/Container/Container";

// @assets
import BackgroundImage from "assets/png/Network.png";
import Skeleton1 from "assets/png/skeleton-1.png";
import Skeleton2 from "assets/png/skeleton-2.png";
import Skeleton3 from "assets/png/skeleton-3.png";
import Skeleton4 from "assets/png/skeleton-4.png";
import ImageAbout from "assets/gif/dungeo.gif";

// ----------------------------------------------------------

export default function index() {
  return (
    <Layout>
      <Background image={BackgroundImage.src}>
        <Container>
          <MainLayout>
            <TextContainer>
              <Text data-aos="fade-up">A generative NFT </Text>
              <MarginText>
                <div data-aos="fade-up">released by the series</div>
                <Network data-aos="fade-up"> ‘DungeoNEAR’ platform.</Network>
              </MarginText>
            </TextContainer>
            <Row>
              <ImageContainer1 data-aos="fade-down">
                <Imagelayout>
                  <Image src={Skeleton1.src} alt="No Image" layout="fill" />
                </Imagelayout>
              </ImageContainer1>
              <ImageContainer2 data-aos="fade-down">
                <Imagelayout>
                  <Image src={Skeleton2.src} alt="No Image" layout="fill" />
                </Imagelayout>
              </ImageContainer2>
              <ImageContainer1 data-aos="fade-down">
                <Imagelayout>
                  <Image src={Skeleton3.src} alt="No Image" layout="fill" />
                </Imagelayout>
              </ImageContainer1>
              <ImageContainer2 data-aos="fade-down">
                <Imagelayout>
                  <Image src={Skeleton4.src} alt="No Image" layout="fill" />
                </Imagelayout>
              </ImageContainer2>
            </Row>
          </MainLayout>
        </Container>
      </Background>
      <Container>
        <FollowContainer>
          <MobileFollowTitle data-aos="fade-up">
            Follow us Goblin! Your Dungeon awaits!
          </MobileFollowTitle>
          <FollowImageContainer data-aos="fade-right">
            <FollowImage>
              <Image src={ImageAbout} layout="fill" alt="No Image" />
            </FollowImage>
          </FollowImageContainer>
          <FollowTextContainer data-aos="fade-left">
            <FollowTitle>Follow us Goblin! Your Dungeon awaits!</FollowTitle>
            <FollowText>
              The Dungeon Goblins NFTs are the first generative visual and
              audible art NFTs on NEAR, minted through the DungeoNEAR platform,
              created by a graphic artist based in the Philippines and a music
              producer based in the US. DungeoNEAR aims to be the jump off point
              of initial funding and proof of concept for upcoming independent
              game developers, designers, music producers, graphic artists, and
              all parts of game design and development. We hope to be a tool
              that helps bring about the next wave of NFT and off chain gaming.
              DungeoNEAR and this NFT style of; a visual and audible, generative
              creation, will open up the NFT community to people who are
              visually impaired. Each NFT will contain a generative short
              musical composition that will contain rarity levels that match up
              to its visual components as well as the DungeoNEAR game being
              designed and developed to use haptics to make the entire
              experience open to the blind community.
            </FollowText>
          </FollowTextContainer>
        </FollowContainer>
      </Container>
    </Layout>
  );
}
