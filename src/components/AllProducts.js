import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { useContext, useState } from "react";
import { UserContext } from "./UserContext";

export default function Products(props) {
  const [selected, setSelected] = useState(null); //state to change main text of dropdown menu

  const { price, setPrice } = useContext(UserContext); //global state to update the total price of items selected
  const { setShow } = useContext(UserContext); //global state to set weather the total price should be visible or not

  function handleSelect(item) {
    //function to change the main text in the color drop menu
    setSelected(item);
  }

  function handlePrice() {
    //function to update the price, show the price and alert the user
    setPrice(price + props.price);
    setShow(true);
    alert(`item purchased! for R${props.price}`);
  }

  return (
    <Col className="myProducts">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.image} className={props.class} />{" "}
        {/*gave the image an optional class*/}
        <hr />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <hr />
          <Card.Text>
            {props.body}
            <br />
            <hr />
            {"R" + props.price}
          </Card.Text>
          <hr />
          <Dropdown>
            <Dropdown.Toggle variant="success">
              {selected || props.change}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {/*change the toggle with a selected item*/}
              <Dropdown.Item onClick={() => handleSelect(props.item1)}>
                {props.item1}
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleSelect(props.item2)}>
                {props.item2}
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleSelect(props.item3)}>
                {props.item3}
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <hr />
          <Button variant="primary" onClick={handlePrice}>
            Buy
          </Button>
        </Card.Body>
      </Card>
      <br />
    </Col>
  );
}
