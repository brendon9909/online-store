import { useContext } from "react";
import { UserContext } from "./UserContext";
import { useFormik } from "formik";
import { NavLink } from "react-router-dom";

export default function Home() {
  //all constants
  const { username, setUsername } = useContext(UserContext);
  const { showInput, setShowInput } = useContext(UserContext);
  const { showButton, setShowButton } = useContext(UserContext);
  const { showSignup, setShowSignup } = useContext(UserContext);
  const { myName } = useContext(UserContext); //access the username from the sign up
  const { userPassword } = useContext(UserContext); //access the password from the sign up
  const { userEmail } = useContext(UserContext); //access the email from the sign up

  const formik = useFormik({
    initialValues: {
      //define initial values for email and password
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      setUsername(myName); //set the username state as the first name from the sign up
      setShowInput(false); //stop showing input by changing state to false
      setShowButton(true); //show logout button
      setShowSignup(false); //remove the navlink to signup page
    },
    validate: (values) => {
      let errors = {}; //create errors object

      if (values.email !== userEmail) {
        //check if the inputted email is the same as the stored signup email
        errors.email = "User does not exist";
      } else if (values.password !== userPassword) {
        //check if the inputted password is the same as the stored signup password
        errors.password = "Password is incorrect";
      }

      if (!values.password) {
        //check if input was left blank
        errors.password = "Required";
      }

      if (!values.email) {
        //check if input was left blank
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email) //check if email is valid
      ) {
        errors.email = "Invalid email";
      }

      return errors;
    },
  });

  function logout() {
    //function to handle logout click
    setShowInput(true); //show the input boxes and login button
    setShowButton(false); //remove logout button
    setUsername(null); //clear username
    setShowSignup(true); //show navlink to signup page
  }

  return (
    <div className="vertical">
      <div className="innerText2">
        <h1 id="headText">Welcome {username || "Guest"}</h1>
        <hr />
        {showInput && (
          <form onSubmit={formik.handleSubmit}>
            <div>
              <label htmlFor="email">Email address</label>
              <br />
              <input
                id="email"
                name="email"
                type="email"
                placeholder="name@example.com"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="warn fixHigh">{formik.errors.email}</div>
              ) : null}
              <br />
              <br />

              <label htmlFor="password">Password</label>
              <br />
              <input
                id="password"
                type="password"
                placeholder="*******"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="warn fixHigh">{formik.errors.password}</div>
              ) : null}
              <br />
              <br />
            </div>
            <button type="submit">Login</button>
          </form>
        )}
        {showButton && <button onClick={logout}>Logout</button>}
        <br />
        <br />
        {showSignup && (
          <NavLink to="/signup">Don't have an account? sign up here</NavLink>
        )}
      </div>
    </div>
  );
}
