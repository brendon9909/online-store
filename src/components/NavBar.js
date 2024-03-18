import { Route, Routes, NavLink } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import SignUp from "./SignUp";
import { Container, Col, Row, Stack } from "react-bootstrap";
import TotalPrice from "./TotalPrice";
import { UserContext } from "./UserContext";
import { useContext } from "react";

export default function TopBar() {
  let clickCount = 0; //click counter to switch between between expanding search bar

  const { price } = useContext(UserContext); //global state for price to put in the total price prop
  const { show } = useContext(UserContext); //state for showing the price to put as the prop

  function showSearch() {
    //function to expand and shrink the search bar
    let mySearch = document.querySelector(".searchInput"); //get the input elemens class
    let myWidth = 10; //variable to change the width of the search bar
    if (clickCount % 2 === 0) {
      //check for clickcount to control weather the search bar is already expanded or not
      mySearch.style.display = "inline"; //make search bar visible
      let intervalId = setInterval(() => {
        myWidth += 2; //increase size of bar
        mySearch.style.width = myWidth + "px";
        if (myWidth >= 200) {
          clearInterval(intervalId);
        }
      });
    } else {
      let myInterval = setInterval(() => {
        myWidth -= 2;
        mySearch.style.width = myWidth + "px";
        if (myWidth <= 10) {
          mySearch.style.display = "none"; //make search bar dissapear
          clearInterval(myInterval);
        }
      });
    }
    clickCount++;
  }

  return (
    <>
      <Stack direction="horizontal" className="topnav">
        <TotalPrice price={price} show={show} />{" "}
        {/*show the total price in the nav bar*/}
        <Container>
          <Row>
            <Col>
              <NavLink to="/" className="myLink">
                Home
              </NavLink>
            </Col>
            <Col>
              <NavLink to="/about" className="myLink">
                About
              </NavLink>
            </Col>
            <Col>
              <NavLink to="/products" className="myLink">
                Products
              </NavLink>
            </Col>
            <Col>
              <img
                onClick={showSearch}
                className="searchIcon"
                src="https://icon-library.com/images/white-search-icon-png/white-search-icon-png-19.jpg"
                alt="search"
              />
              <input
                className="searchInput"
                placeholder="This search doesn't work"
              />
            </Col>
          </Row>
        </Container>
      </Stack>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}
