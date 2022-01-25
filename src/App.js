import { Navbar, Container, Stack } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Intro from "./components/Intro";
import Project from "./components/Project";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Container>
        <Navbar bg="white" expand="lg">
          <Navbar.Brand>Jeff Ou</Navbar.Brand>
        </Navbar>
        <Stack gap={5}>
          <Intro></Intro>
          <Project name="Static Web"></Project>
          <Project name="Full Stack Web Application"></Project>
          <Footer></Footer>
        </Stack>
      </Container>
    </div>
  );
}

export default App;
