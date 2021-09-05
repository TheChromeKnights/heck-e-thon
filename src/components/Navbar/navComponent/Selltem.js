import React from "react";
import Card from "../../UI/Card";

const SellItem = (props) => {
  return (
    <Card open={props.openUpload} close={props.setOpenUpload}>
      <div>hello</div>
    </Card>
  );
};

export default SellItem;
