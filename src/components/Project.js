import { Card, CardGroup, Button } from "react-bootstrap";
import natourImg from "./natour.png";
import nexterImg from "./nexter.png";
import trelloImg from "./trello.png";
function Project(props) {
  let natourLink = "https://natours666.herokuapp.com/index.html";
  let nexterLink = "https://nexter666.herokuapp.com/index.html";
  let trelloLink = "https://trello666.herokuapp.com/";
  let cards;
  if (props.name === "Frontend") {
    cards = [
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
  } else {
    cards = <div>backend</div>;
  }

  return (
    <div>
      <h1 className="display-5 text-center">{props.name}</h1>
      <CardGroup>{cards}</CardGroup>
    </div>
  );
}
export default Project;
