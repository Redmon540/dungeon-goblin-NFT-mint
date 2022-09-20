import styled from "styled-components";

// -----------------------------------------------------------

export const Layout = styled.div`
  width: 100vw;

  padding: 250px 0px 50px 0px;

  display: flex;
  justify-content: center;

  @media screen and (max-width: 1250px) {
    padding: 200px 0px 50px 0px;
  }

  @media screen and (max-width: 575px) {
    padding: 150px 0px 50px 0px;
  }
`;

export const MainLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 575px) {
    grid-template-columns: 1fr;
  }
`;

export const ItemLayout = styled.div`
  display: flex;
  justify-content: center;
`;

export const Title = styled.div`
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
