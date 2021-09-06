import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Modal } from "@material-ui/core";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    // width: 300,
    // height: 420,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

const Card = (props) => {
  console.log(`Card ${props.open}`);
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  return (
    <Modal open={props.open} onClose={() => props.close(false)}>
      <div style={modalStyle} className={`ImageUpload ${classes.paper}`}>
        {props.children}
      </div>
    </Modal>
  );
};

export default Card;
