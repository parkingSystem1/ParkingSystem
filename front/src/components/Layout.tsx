import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <Body>
        <Content>{children}</Content>
        <Footer />
      </Body>
    </>
  );
};

export default Layout;

const Body = styled.main`
  width: 100%;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 80px);
  background-color: white;
`;

const Content = styled.div`
  width: 60%;
  min-width: 300px;
  flex-grow: 1;
`;
