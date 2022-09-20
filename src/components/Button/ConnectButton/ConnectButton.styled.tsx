import styled from "styled-components";

// -----------------------------------------------------------

export const Layout = styled.div`
  position: relative;

  width: 180px;
  height: 56px;

  background: #f05a28;

  color: white;
  font-weight: 600;
  font-size: 18px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  transition: all 0.2s ease-out;

  :hover,
  :focus {
    box-shadow: inset 180px 0 0 0 white;
    color: #f05a28;
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

  @media screen and (max-width: 1024px) {
    width: 150px;
    height: 50px;
    font-size: 14px;
  }

  @media screen and (max-width: 768px) {
    width: 120px;
    height: 50px;
    font-size: 14px;
  }

  @media screen and (max-width: 425px) {
    width: 110px;
    height: 45px;
  }
`;
