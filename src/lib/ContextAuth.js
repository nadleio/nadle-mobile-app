import React from "react";

const ContextAuth = React.createContext({
  logged: false,
  setLogged: null
});

export default ContextAuth;
