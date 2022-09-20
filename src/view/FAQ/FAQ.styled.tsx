import styled from "styled-components";

// -----------------------------------------------------------

export const Layout = styled.div`
  width: 100vw;

  display: flex;
  justify-content: center;

  padding: 250px 0px 200px 0px;

  @media screen and (max-width: 1200px) {
    padding: 200px 0px 200px 0px;
  }
  @media screen and (max-width: 1024px) {
    padding: 150px 0px 200px 0px;
  }
  @media screen and (max-width: 768px) {
    padding: 100px 0px 200px 0px;
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

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  & > *:not(:last-child) {
    margin-right: 30px;
  }
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    & > *:not(:last-child) {
      margin-right: 0px;
      margin-bottom: 20px;
    }
  }
`;

export const Questions = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Col = styled.div`
  display: flex;
  flex-direction: column;
  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const QuestionItem = styled.div`
  width: 100%;
  padding: 30px 25px;
  background: linear-gradient(
    270deg,
    rgba(20, 29, 44, 0.5),
    rgba(2, 12, 26, 0)
  );
  :hover {
    background: rgba(20, 29, 44);
  }

  transition: all 0.3s;
`;
export const Question = styled.div`
  font-size: 28px;
  line-height: 36px;
  color: #f05a28;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    font-size: 26px;
    text-align: center;
  }
  @media screen and (max-width: 370px) {
    font-size: 24px;
  }
`;
export const Answer = styled.div`
  font-size: 16px;
  line-height: 28px;
  color: #fff;
  opacity: 0.7;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
  @media screen and (max-width: 370px) {
    font-size: 12px;
  }
`;
