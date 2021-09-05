import React from "react";
import Card from "../../UI/Card";
import { Button } from "@material-ui/core";
const Profile = (props) => {
  return (
    <Card open={props.openProfile} close={props.setOpenProfile}>
      <div className="container-fluid">
        <div className="card" style={{ minWidth: "300px" }}>
          <div className="card-title" style={{ textAlign: "center" }}>
            Profile
          </div>
          <div className="card-body">
            <Button
              onClick={() => {
                props.setLoggedIn(false);
                props.setOpenProfile(false);
              }}
            >
              Log out
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Profile;
