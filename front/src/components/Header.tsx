import styled from "styled-components";

const Header = () => {
  return <Wrapper>헤더</Wrapper>;
};

export default Header;

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: #4caf75;
  color: white;
  text-align: center;
  font-size: 24px;
  padding: 30px 0;
  z-index: 999;

  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
`;
