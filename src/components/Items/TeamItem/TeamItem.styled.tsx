import styled from "styled-components";
import Link from "next/link";

// -----------------------------------------------------------
export const Layout = styled.div`
  position: relative;

  width: 100%;
  max-width: 350px;
  height: 350px;

  border-radius: 20px;

  padding: 20px;

  background: #0f1826;

  overflow: hidden;
`;
export const ImageLayout = styled.div`
  position: relative;

  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.div`
  width: 100%;
  text-align: center;

  margin-top: 20px;

  color: white;
  font-size: 20px;
  font-weight: 600;
`;
export const Des = styled.div`
  width: 100%;
  text-align: center;

  margin-top: 10px;

  color: rgb(135, 141, 149);
  font-size: 15px;
`;

export const Detail = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 40%;
  backdrop-filter: blur(15px);

  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;

  transition: all 0.3s;

  visibility: hidden;
  transform: translateY(110%);

  ${Layout}:hover & {
    transform: translate(0px);
    visibility: visible;
  }
`;
export const Name = styled.div`
  font-size: 20px;
  color: white;
  font-weight: 600;
`;

export const Icons = styled.div`
  margin-top: 20px;
  display: flex;
  color: white;
`;
export const Icon = styled(Link)`
  cursor: pointer;
`;
