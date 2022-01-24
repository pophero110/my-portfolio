import { Card, CardGroup, Button } from "react-bootstrap";
import natourImg from "./natour.png";
import nexterImg from "./nexter.png";
import trelloImg from "./trello.png";
function Project() {
  let natourLink = "https://natours666.herokuapp.com/index.html";
  let nexterLink = "https://natours666.herokuapp.com/index.html";
  let trelloLink = "https://nexter666.herokuapp.com/index.html";
  let cards = [
    ["Natour", natourImg, natourLink],
    ["Nexter", nexterImg, nexterLink],
    ["Trello", trelloImg, trelloLink],
  ].map((project) => (
    <Card bg="light">
      <Card.Img variant="bottom" src={project[1]} />
      <Card.Body>
        <Card.Title className="text-center">{project[0]}</Card.Title>
      </Card.Body>
      <Button href={project[2]} variant="outline-secondary" target="_blank">
        View
      </Button>
    </Card>
  ));
  return <CardGroup>{cards}</CardGroup>;
}
export default Project;
