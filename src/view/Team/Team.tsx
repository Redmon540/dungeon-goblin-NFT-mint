import React from "react";

// @styled-component
import { Layout, MainLayout, ItemLayout, Title } from "./Team.styled";

// @component
import { TeamItem } from "components/Items";
import Container from "components/Container/Container";

// @assets
import { FaTwitter, FaDiscord } from "react-icons/fa";
import Image1 from "assets/png/skeleton-1.png";
import Image2 from "assets/png/skeleton-2.png";
import Image3 from "assets/png/skeleton-3.png";
import Image4 from "assets/png/skeleton-4.png";
import Image5 from "assets/png/skeleton-5.png";
import Image6 from "assets/png/skeleton-6.png";

const TeamInfo = [
  {
    image: Image1,
    role: "Product Manager",
    description: "USA",
    name: "Austin",
    connect: [{ icon: FaTwitter, link: "http://twitter.com/akatheregicide" }],
  },
  {
    image: Image3,
    role: "Marketing & Team Lead",
    description: "Nigeria",
    name: "Joyce",
    connect: [{ icon: FaTwitter, link: "http://twitter.com/brownie_jay1" }],
  },
  {
    image: Image2,
    role: "Marketing & Digital Content",
    description: "Nigeria",
    name: "Jay",
    connect: [{ icon: FaTwitter, link: "http://twtter.com/onyijay09" }],
  },
  {
    image: Image6,
    role: "Senior Developer",
    description: "Netherlands",
    name: "Jordy",
    connect: [
      {
        icon: FaDiscord,
        link: "https://discordapp.com/users/969886094881599508",
      },
    ],
  },
  {
    image: Image4,
    role: "Music Producer",
    description: "USA",
    name: "Bodi",
    connect: [{ icon: FaTwitter, link: "http://twitter.com/drummerchops" }],
  },
  {
    image: Image5,
    role: "Graphic Designer & Artist",
    description: "Philippines",
    name: "Alech",
    connect: [{ icon: FaTwitter, link: "http://twitter.com/AlechNatividad" }],
  },
];
// ----------------------------------------------------------

export default function index() {
  return (
    <Layout id="team">
      <Container>
        <Title>TEAM</Title>

        <MainLayout>
          {TeamInfo.map((item, index) => (
            <ItemLayout key={index}>
              <TeamItem data={item} />
            </ItemLayout>
          ))}
        </MainLayout>
      </Container>
    </Layout>
  );
}
