import styled from "styled-components";

// -----------------------------------------------------------

export const Layout = styled.div`
  position: relative;

  width: 100%;
  max-width: 1200px;

  @media screen and (max-width: 1250px) {
    max-width: 900px;
  }

  @media screen and (max-width: 1024px) {
    max-width: 700px;
  }

  @media screen and (max-width: 768px) {
    max-width: 510px;
  }

  @media screen and (max-width: 570px) {
    max-width: 90%;
  }
`;
