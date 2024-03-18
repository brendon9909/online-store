import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  //create state for all constants to be used globally
  const [username, setUsername] = useState(null);
  const [showInput, setShowInput] = useState(true);
  const [price, setPrice] = useState(0);
  const [show, setShow] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [userEmail, setUserEmail] = useState(null);
  const [userPassword, setUserPassword] = useState(null);
  const [myName, setMyName] = useState(null);
  const [showSignup, setShowSignup] = useState(true)

  return (
    <UserContext.Provider
      value={{
        username,
        setUsername,
        showInput,
        setShowInput,
        price,
        setPrice,
        show,
        setShow,
        showButton, 
        setShowButton,
        userEmail, 
        setUserEmail,
        userPassword, 
        setUserPassword,
        myName, 
        setMyName,
        showSignup, 
        setShowSignup,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
