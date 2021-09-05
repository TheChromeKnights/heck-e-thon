import React from "react";
import Card from "../../UI/Card";
const Favorites = (props) => {
  return (
    <Card open={props.openFavorite} close={props.setOpenFavorite}>
      <div>Favorites</div>
    </Card>
  );
};

export default Favorites;
