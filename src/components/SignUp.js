import { Container, Col, Row } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useContext } from "react";
import { UserContext } from "./UserContext";

export default function SignUp() {
  //global states to store the sign up information
  const { setUserEmail } = useContext(UserContext);
  const { setUserPassword } = useContext(UserContext);
  const { setMyName } = useContext(UserContext);
  const navigate = useNavigate(); //navigate defined to be used on form submit to redirect

  function stringTest(str) {
    //function to check if password meets neccessary requirements
    const lower = /[a-z]/;
    const upper = /[A-Z]/;
    const nums = /[0-9]/;
    const specialchar = /[!@#$%^&*?_]/;

    return (
      lower.test(str) &&
      upper.test(str) &&
      nums.test(str) &&
      specialchar.test(str)
    ); //test password
  }

  const formik = useFormik({
    //formik defined
    initialValues: {
      //define all initial values
      firstname: "",
      surname: "",
      email: "",
      password: "",
      confirm: "",
    },
    onSubmit: (values) => {
      navigate("/"); //navigate to home page on submit
    },
    validate: (values) => {
      let errors = {}; //create errors object

      if (!values.firstname) {
        //check for if the input was left blank
        errors.firstname = "Required";
      } else if (values.firstname.length > 15) {
        //check if the input is too long
        errors.firstname = "name is too long";
      }

      if (!values.surname) {
        //check for if the input was left blank
        errors.surname = "Required";
      } else if (values.surname.length > 20) {
        //check if the input is too long
        errors.surname = "surname is too long";
      }

      if (!values.email) {
        //check for if the input was left blank
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email) //check if email format is valid
      ) {
        errors.email = "Invalid email";
      }

      if (!values.password) {
        //check for if the input was left blank
        errors.password = "Required";
      } else if (values.password.length < 8) {
        //check if password is too short
        errors.password = "password is too short";
      } else if (stringTest(values.password) === false) {
        //test password using stringtest function
        errors.password =
          "make sure password contains a capital letter, a number and a special character";
      }

      if (!values.confirm) {
        //check for if the input was left blank
        errors.confirm = "Required";
      }

      if (values.password !== values.confirm) {
        //check if both passwords match
        errors.confirm = "Passwords don't match";
      }

      return errors;
    },
  });

  function updateInfo() {
    //function to update global states on button click
    setMyName(formik.values.firstname);
    setUserEmail(formik.values.email);
    setUserPassword(formik.values.password);
  }

  return (
    <div className="vertical">
      <div className="innerText">
        <h1>Sign up</h1>
        <hr />
        <form onSubmit={formik.handleSubmit}>
          <Container>
            <Row>
              <Col>
                <label htmlFor="firstname">First name</label>
                <br />
                <input
                  name="firstname"
                  id="firstname"
                  type="text"
                  value={formik.values.firstname}
                  onChange={formik.handleChange}
                />
                {formik.touched.firstname && formik.errors.firstname ? (
                  <div className="warn fixHigh">{formik.errors.firstname}</div>
                ) : null}
                <br />
                <br />
              </Col>
              <Col>
                <label htmlFor="surname">Surname</label>
                <br />
                <input
                  name="surname"
                  id="surname"
                  type="text"
                  value={formik.values.surname}
                  onChange={formik.handleChange}
                />
                {formik.touched.surname && formik.errors.surname ? (
                  <div className="warn fixHigh">{formik.errors.surname}</div>
                ) : null}
                <br />
                <br />
              </Col>
            </Row>
          </Container>

          <label htmlFor="email">Email Address</label>
          <br />
          <input
            name="email"
            id="email"
            className="longInput"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="warn fixHigh">{formik.errors.email}</div>
          ) : null}
          <br />
          <br />

          <label htmlFor="password">Password</label>
          <br />
          <input
            name="password"
            id="password"
            className="longInput"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="warn fixHigh">{formik.errors.password}</div>
          ) : null}
          <br />
          <br />

          <label htmlFor="confirm">Confirm password</label>
          <br />
          <input
            name="confirm"
            id="confirm"
            className="longInput"
            type="password"
            value={formik.values.confirm}
            onChange={formik.handleChange}
          />
          {formik.touched.confirm && formik.errors.confirm ? (
            <div className="warn fixHigh">{formik.errors.confirm}</div>
          ) : null}
          <br />
          <br />
          <button type="submit" onClick={updateInfo}>
            Sign up
          </button>
        </form>
        <br />
        <NavLink to="/">Already have an account? sign in here</NavLink>
      </div>
    </div>
  );
}
