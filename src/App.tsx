import styled from "styled-components";
import MainPage from "./pages/Main";

function App() {
  return (
    <AppContainer>
      <MainPage />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.section`
  width: 100vw;
  height: 100%;
  background-color: #ffffff;
  max-width: 700px;
`;
