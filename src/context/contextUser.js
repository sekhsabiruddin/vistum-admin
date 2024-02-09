import React, { createContext, useState } from "react";

// Create a new context
const UserContext = createContext();

// Create a provider component
const UserProvider = ({ children }) => {
  const [buggercliked, SetBuggercliked] = useState(false);

  // Function to update user
  const handleBuggerMenu = () => {
    SetBuggercliked(true);
  };

  const handleCrossMenu = () => {
    SetBuggercliked(false);
  };
  return (
    <UserContext.Provider
      value={{ buggercliked, handleBuggerMenu, handleCrossMenu }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
