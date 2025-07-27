import styled from "styled-components";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Wrapper>
      <Header>헤더</Header>
      <Body>
        <Content>{children}</Content>
      </Body>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div``;

const Header = styled.header`
  width: 100%;
  background-color: #4caf75;
  color: white;
  text-align: center;
  padding: 20px 0;
  font-size: 24px;
`;

const Body = styled.main`
  width: 100%;
  margin: 0 auto;
  background-color: white;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 60%;
  min-width: 300px;
`;
