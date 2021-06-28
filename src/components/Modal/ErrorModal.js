import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";


const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    width: 600,
    backgroundColor: theme.palette.background.default,
    border: "1px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    marginTop: '14rem',
    marginLeft:'24rem'
  },
  modal__header:{
    backgroundColor:'#4f005f',
    textAlign:'center',
    padding:'1px',
    borderRadius:'10px'
  }
}));

 const ErrorModal = (props)=> {
  const classes = useStyles();

  const body = (
    <div  className={classes.modal}>
      <div className={classes.modal__header}>
        <h2 id="simple-modal-title">Invalid Input</h2>
      </div>
      <p id="simple-modal-description" className={classes.modal__para}>
        Please enter a valid age (0)
      </p>
    </div>
  );

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

export default ErrorModal