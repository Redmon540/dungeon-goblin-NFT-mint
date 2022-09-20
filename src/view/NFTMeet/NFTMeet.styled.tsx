import styled from "styled-components";

import "swiper/css";
import "swiper/css/free-mode";

// -----------------------------------------------------------

export const Layout = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 200px 0px 50px 0px;

  @media screen and (max-width: 1024px) {
    padding: 100px 0px 50px 0px;
  }
`;

export const SwiperLayout = styled.div`
  .swiper-slide {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 220px;
  }
`;

export const TextContainer = styled.div`
  position: relative;
  top: 80px;
`;

export const Text = styled.div`
  font-size: 56px;
  font-weight: 600;
  color: #fff;
  text-align: center;
  @media screen and (max-width: 1250px) {
    font-size: 42px;
  }
  @media screen and (max-width: 768px) {
    font-size: 36px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
  @media screen and (max-width: 370px) {
    font-size: 28px;
  }
`;

export const TextColor = styled.div`
  font-size: 56px;
  font-weight: 600;
  line-height: 71px;
  color: #f05a28;
  text-align: center;
  @media screen and (max-width: 1250px) {
    font-size: 42px;
  }
  @media screen and (max-width: 768px) {
    font-size: 36px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
  @media screen and (max-width: 370px) {
    font-size: 28px;
  }
`;

export const SwiperContainer = styled.div<{ image: any }>`
  width: 100vw;
  left: 0;
  max-width: 100%;
  padding-top: 150px;
  background: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-position: 48.5% -10px;
  background-size: 450px;
`;

export const ImageContainer = styled.div<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;

  cursor: pointer;

  opacity: ${({ isActive }) => (isActive ? 1 : 0.4)};
`;
export const Feature2 = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 40px;

  @media screen and (max-width: 1024px) {
    flex-direction: column-reverse;
  }
`;

export const Letter = styled.div`
  position: relative;

  margin-top: 16px;

  width: 220px;
  height: 50px;
  background: #141d2c;
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: #f05a28;
  }

  ::before {
    position: absolute;
    content: "";
    top: -10px;
    left: -10px;
    border: 10px solid transparent;
    border-top-color: #020c1a;
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
  }

  ::after {
    position: absolute;
    content: "";
    bottom: -10px;
    right: -10px;
    border: 10px solid transparent;
    border-top-color: #020c1a;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
`;
