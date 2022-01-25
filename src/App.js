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
          {/* <Nav className="me-auto">
            <NavDropdown title=" " id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">My Blog</NavDropdown.Item>
            </NavDropdown>
          </Nav> */}
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
