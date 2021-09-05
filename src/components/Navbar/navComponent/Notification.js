import React from "react";
import Card from "../../UI/Card";
const Notification = (props) => {
  return (
    <Card open={props.openNotification} close={props.setOpenNotification}>
      <div>Notifications</div>
    </Card>
  );
};

export default Notification;
