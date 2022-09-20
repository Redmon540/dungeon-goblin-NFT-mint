import styled from "styled-components";

// -----------------------------------------------------------

export const Layout = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 150px;
  padding-bottom: 50px;

  @media screen and (max-width: 768px) {
    padding: 50px 0px;
  }
`;

export const Background = styled.div<{ image: any }>`
  display: flex;
  justify-content: center;

  width: 100vw;

  background: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;

  @media screen and (max-width: 575px) {
    background: #020c1a;
  }
`;

export const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 56px;
  margin-bottom: 130px;
  @media screen and (max-width: 575px) {
    margin-bottom: 40px;
  }
`;

export const Text = styled.div`
  max-width: 500px;

  color: white;
  font-size: 56px;
  font-weight: 600;

  @media screen and (max-width: 1250px) {
    font-size: 42px;
  }
  @media screen and (max-width: 768px) {
    font-size: 36px;
    text-align: center;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
  @media screen and (max-width: 370px) {
    font-size: 28px;
  }
`;

export const MarginText = styled.div`
  color: white;

  font-size: 56px;
  font-weight: 600;

  line-height: 66px;
  margin-left: 95px;

  @media screen and (max-width: 1250px) {
    font-size: 42px;
  }
  @media screen and (max-width: 768px) {
    font-size: 36px;
    margin-left: 0px;
    text-align: center;
    line-height: 46px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
    line-height: 42px;
  }

  @media screen and (max-width: 370px) {
    font-size: 28px;
    line-height: 38px;
  }
`;

export const Network = styled.div`
  color: #f05a28;

  font-size: 56px;

  @media screen and (max-width: 1250px) {
    font-size: 42px;
  }
  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 36px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
  @media screen and (max-width: 370px) {
    font-size: 28px;
  }
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1250px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
  }
  @media screen and (max-width: 575px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ImageContainer1 = styled.div`
  position: relative;

  width: 270px;
  height: 270px;

  border-radius: 40px;

  background: #0f1826;
  border: 1px solid hsla(0, 0%, 100%, 0.15);

  display: flex;
  justify-content: center;
  align-items: flex-end;

  ::before {
    position: absolute;
    content: "";
    bottom: -2px;
    left: -2px;
    width: calc(100% + 4px);
    height: 100%;
    background: linear-gradient(180deg, rgba(15, 24, 38, 0) 30.67%, #0f1826);
    border-radius: 40px;
    @media screen and (max-width: 575px) {
      display: none;
    }
  }
  ::after {
    position: absolute;
    content: "";
    bottom: calc(-100% - 25px);
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, #111b2b, #020c1a);
    border-radius: 40px;
    z-index: -1;
    opacity: 0.35;
    @media screen and (max-width: 575px) {
      display: none;
    }
  }
  @media screen and (max-width: 1250px) {
    width: 100%;
  }
`;
export const ImageContainer2 = styled.div`
  position: relative;

  width: 270px;
  height: 270px;

  border-radius: 40px;

  margin-top: -60px;
  @media screen and (max-width: 575px) {
    margin-top: 0px;
  }

  background: #0f1826;
  border: 1px solid hsla(0, 0%, 100%, 0.15);

  display: flex;
  justify-content: center;
  align-items: flex-end;

  ::before {
    position: absolute;
    content: "";
    bottom: -2px;
    left: -2px;
    width: calc(100% + 4px);
    height: 100%;
    background: linear-gradient(180deg, rgba(15, 24, 38, 0) 30.67%, #0f1826);
    border-radius: 40px;
    @media screen and (max-width: 575px) {
      display: none;
    }
  }
  ::after {
    position: absolute;
    content: "";
    bottom: calc(-100% - 25px);
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, #111b2b, #020c1a);
    border-radius: 40px;
    z-index: -1;
    opacity: 0.35;
    @media screen and (max-width: 575px) {
      display: none;
    }
  }
  @media screen and (max-width: 1250px) {
    width: 100%;
  }
`;

export const Imagelayout = styled.div`
  position: relative;
  width: 100%;
  height: 90%;

  :after {
    position: absolute;
    content: "";
    bottom: -2px;
    left: -2px;
    width: calc(100% + 4px);
    height: 100%;
    background: linear-gradient(180deg, rgba(15, 24, 38, 0) 30.67%, #0f1826);
    border-radius: 40px;
  }
`;

export const FollowContainer = styled.div`
  width: 100%;

  margin-top: 300px;

  display: flex;
  justify-content: flex-start;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }

  @media screen and (max-width: 575px) {
    margin-top: 100px;
  }
`;

export const MobileFollowTitle = styled.div`
  display: none;

  color: #f05a28;
  font-size: 56px;
  font-weight: 600;

  margin-bottom: 30px;
  text-align: center;

  @media screen and (max-width: 1024px) {
    display: block;
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

export const FollowImageContainer = styled.div`
  min-width: 350px;
  height: 400px;

  display: flex;
  justify-content: center;
  align-items: flex-end;

  margin: 30px;
  padding: 30px;

  border-radius: 40px;
  background: linear-gradient(186.21deg, #0f1826 4.91%, #020c1a 85.87%);

  @media screen and (max-width: 1024px) {
    width: 100%;
    margin: 0px;
  }
  @media screen and (max-width: 425px) {
    width: 100%;
    min-width: 200px;
  }
`;

export const FollowImage = styled.div`
  width: 100%;
  max-width: 350px;
  height: 300px;
  position: relative;
  margin-bottom: 15px;
`;
export const FollowTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FollowTitle = styled.div`
  color: #f05a28;

  font-size: 42px;
  font-weight: 600;

  margin-bottom: 25px;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
export const FollowText = styled.div`
  font-size: 18px;
  line-height: 28px;
  color: white;
  opacity: 0.7;
  @media screen and (max-width: 570px) {
    padding: 0px 10px;
    text-align: center;
  }
`;
