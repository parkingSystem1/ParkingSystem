import GlobalStyle from "./styles/GlobalStyles";
import AppRouter from "./routes/Router";
import Layout from "./components/Layout";

const App = () => (
  <>
    <GlobalStyle />
    <Layout>
      <AppRouter />
    </Layout>
  </>
);

export default App;
