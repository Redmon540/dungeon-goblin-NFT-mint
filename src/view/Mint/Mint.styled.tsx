// @styled components
import styled from "styled-components";

//-------------------------------------------------------------------------

export const Layout = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  padding: 250px 0px 150px 0px;

  @media screen and (max-width: 1250px) {
    padding: 250px 0px 100px 0px;
  }

  @media screen and (max-width: 575px) {
    padding: 100px 0px 100px 0px;
  }
`;

export const MainLayout = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
`;

export const MintForm = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 0 24px 0 rgba(75, 75, 88, 54%);
  border-radius: 20px;
  padding: 50px;

  @media screen and (max-width: 1024px) {
    width: 90%;
    padding: 50px 30px;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 50px 0px;
  }
`;

export const ImageLayout = styled.div`
  width: 50%;
  height: 300px;

  @media screen and (max-width: 768px) {
    width: 70%;
    margin-bottom: 20px;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 80%;
  height: 100%;

  border-radius: 20px;
  img {
    border-radius: 20px;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextSupply = styled.div`
  color: #f05a28;
  text-align: center;
  padding-top: 20px;
  font-size: 20px;
  font-weight: 600;
`;

//----------------------------------
export const MintLayout = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > *:not(:last-child) {
    margin-bottom: 15px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Text = styled.div`
  color: white;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
`;

export const MintButtonAction = styled.div<{ disabled?: boolean }>`
  height: 60px;
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  border-radius: 5px;
  border: 3px solid #f05a28;
  transition: 0.3s ease;
  font-size: 20px;
  box-shadow: 0.375em 0.375em 0 0 #343443;
  transition: 0.3s ease;
  position: relative;
  transform: translate(0);
  cursor: ${(props) => (props.disabled ? "no-drop" : "pointer")};
  &:hover {
    background: #f05a28;
    transition: 0.3s ease;
    transform: translate(0.375em, 0.375em);
    box-shadow: 0 0 0 0 #343e47;
  }
`;
export const MintInputContainer = styled.div`
  display: flex;
  background-color: #3b3b3b;
  border-radius: 10px;
  border: 1px solid white;
`;
export const MintNumberInput = styled.input`
  background: rgba(0, 0, 0, 0);
  border: 0px;
  padding-left: 20px;
  font-size: 20px;
  color: white;
  width: 200px;
`;
export const MintInputActions = styled.div`
  display: flex;
  flex-direction: column;
`;
export const MintInputIncrease = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: white;
  border: 1px solid white;
  border-top-right-radius: 10px;
`;
export const MintInputDecrease = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: white;
  border: 1px solid white;
  border-bottom-right-radius: 10px;
`;
