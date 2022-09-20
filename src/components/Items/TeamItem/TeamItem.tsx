import React from "react";
import Image from "next/image";

// @styled-components
import {
  Layout,
  ImageLayout,
  Title,
  Des,
  Detail,
  Name,
  Icons,
  Icon,
} from "./TeamItem.styled";

// @type
type Props = {
  image: any;
  role: string;
  description: string;
  name: string;
  connect: { icon: any; link: string }[];
};

//----------------------------------------------------------------

const Container: React.FC<{ data: Props }> = ({ data }) => {
  return (
    <Layout>
      <ImageLayout>
        <Image src={data.image} alt="No Image" layout="fill" />
      </ImageLayout>
      <Title>{data.role}</Title>
      <Des>{data.description}</Des>
      <Detail>
        <Name>{data.name}</Name>
        <Icons>
          {data.connect.map((item, index) => (
            <Icon key={index} href={item.link}>
              <a target="_blank">
                <item.icon />
              </a>
            </Icon>
          ))}
        </Icons>
      </Detail>
    </Layout>
  );
};
export default Container;
