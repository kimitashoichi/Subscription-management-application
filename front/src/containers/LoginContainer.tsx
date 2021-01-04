import React from "react";
import Button from "@material-ui/core/Button"

import LinkComponent from "../components/LinkComponent";
import "./LoginContainer.css";

const LoginContainer: React.FC = () => {
  return (
    <>
      <div className="top-container">
        <h1>App Title</h1>
        <LinkComponent src="/top">
          <Button variant="contained" color="primary">Login</Button>
        </LinkComponent>
      </div>
    </>
  )
}

export default LoginContainer;