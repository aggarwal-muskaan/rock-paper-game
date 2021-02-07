import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import Button from "@material-ui/core/Button";
import rules from "./images/rules.svg";
import useStyles from "./styles/FooterStyle";

const Footer = (props) => {
  const classes = useStyles(props);

  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <div className={classes.footer}>
      <Button
        variant="outlined"
        onClick={handleClick}
        className={classes.footerButton}
      >
        RULES
      </Button>

      <Dialog
        open={open}
        onClose={closeModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <MuiDialogTitle
          id="customized-dialog-title"
          disableTypography
          className={classes.modalText}
        >
          <Typography variant="h5">RULES</Typography>
          <IconButton onClick={closeModal} aria-label="close">
            <CloseIcon />
          </IconButton>
        </MuiDialogTitle>
        <img src={rules} alt="game rules" style={{ padding: "1rem" }} />
      </Dialog>
    </div>
  );
};

export default Footer;
