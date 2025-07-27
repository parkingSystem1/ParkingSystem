import styled from "styled-components";

const Footer = () => {
  return <Wrapper>인공지능 주차 시스템 | 이웅섭 김지연 김민진</Wrapper>;
};

export default Footer;

const Wrapper = styled.footer`
  width: 100%;
  height: 60px;
  background-color: #f2f2f2;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
`;
