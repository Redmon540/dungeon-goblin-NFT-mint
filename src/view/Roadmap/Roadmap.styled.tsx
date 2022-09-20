import styled from "styled-components";

// -----------------------------------------------------------

export const Layout = styled.div<{ image: any }>`
  width: 100vw;

  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-position: 50% -140px;

  padding: 250px 0px 50px 0px;

  display: flex;
  justify-content: center;

  @media screen and (max-width: 1200px) {
    padding: 200px 0px 50px 0px;
  }
  @media screen and (max-width: 1024px) {
    padding: 150px 0px 50px 0px;
  }
  @media screen and (max-width: 768px) {
    padding: 100px 0px 50px 0px;
  }
`;

export const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  text-align: center;

  font-size: 56px;
  font-weight: 800;
  color: white;

  margin-bottom: 50px;

  @media screen and (max-width: 1250px) {
    font-size: 42px;
  }
  @media screen and (max-width: 768px) {
    font-size: 36px;
  }
`;
export const RoadmapContainer = styled.div`
  & > *:not(:last-child) {
    margin-bottom: 65px;
  }
  padding: 0px 290px;

  @media screen and (max-width: 1250px) {
    padding: 0px 160px;
  }

  @media screen and (max-width: 1024px) {
    padding: 0px 70px;
  }

  @media screen and (max-width: 768px) {
    padding: 0px 0px;
  }
`;
export const RoadmapItem = styled.div<{ end?: string }>`
  position: relative;

  display: flex;

  ::after {
    ${({ end }) => (end === "true" ? "display:none" : "")}
    position: absolute;
    content: "";
    top: 37px;
    left: 17px;
    width: 3px;
    height: calc(100% + 50px);
    background-color: #535353;
  }
`;
export const Counter = styled.div<{ active: boolean }>`
  font-size: 25px;
  line-height: 24px;
  color: ${({ active }) => (active ? "#f05a28" : "#535353")};
  margin-bottom: 12px;
`;
export const Date = styled.div`
  font-size: 25px;
  line-height: 25px;
  color: #fff;
  margin-bottom: 15px;
`;
export const Detail = styled.div`
  font-size: 16px;
  line-height: 24px;
  color: #fff;
  opacity: 0.7;
`;
export const Icon = styled.div`
  position: relative;
  width: 37px;
  height: 40px;
  min-width: 37px;
  min-height: 40px;
  max-width: 37px;
  max-height: 40px;
  margin-right: 25px;
`;
