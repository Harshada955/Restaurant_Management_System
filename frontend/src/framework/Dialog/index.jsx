import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import PropTypes from "prop-types";
import { forwardRef } from "react";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogBox = (props) => {
  const {
    open = false,
    handleClose = () => {},
    dialogTitle = "",
    dialogContentText = "",
    showCancelButton = false,
    cancelButtonText = "",
    showOkButton = false,
    okButtonText = "",
    okHandler = () => {},
    cancelHandler = () => {},
  } = props;
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted={true}
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{dialogTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {dialogContentText}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {showCancelButton && (
            <Button onClick={cancelHandler}>{cancelButtonText}</Button>
          )}
          {showOkButton && <Button onClick={okHandler}>{okButtonText}</Button>}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DialogBox;

DialogBox.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  dialogTitle: PropTypes.string,
  dialogContentText: PropTypes.string,
  showCancelButton: PropTypes.bool,
  cancelButtonText: PropTypes.string,
  showOkButton: PropTypes.bool,
  okButtonText: PropTypes.string,
  okHandler: PropTypes.func,
  cancelHandler: PropTypes.func,
};
