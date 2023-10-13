import React from "react";

const AuthContext = React.createContext({
  currentStepNumber: 0,
  formSteps: []
});

export default AuthContext;