import React from "react";
import Card from "../../UI/Card";
import { Button } from "@material-ui/core";
const Login = (props) => {
  return (
    <Card open={props.openLogin} close={props.setOpenLogin}>
      <div className="container-fluid">
        <div className="card" style={{ minWidth: "300px" }}>
          <div className="card-title" style={{ textAlign: "center" }}>
            SignIn
          </div>
          <div className="card-body">
            <Button
              onClick={() => {
                props.setLoggedIn(true);
                props.setOpenLogin(false);
              }}
              variant="outlined"
            >
              Log In
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Login;
