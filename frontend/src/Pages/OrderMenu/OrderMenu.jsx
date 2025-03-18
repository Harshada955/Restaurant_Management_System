import DialogBox from "../../framework/Dialog";
import { useDispatch, useSelector } from "react-redux";
import { dialogOpen, dialogClose } from "../../redux/reducer/commonReducer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OurMenu from "../OurMenu/OurMenu";

const OrderMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.common.open);

  const cancelHandler = () => {
    navigate("/success");
    dispatch(dialogClose());
  };

  const okHandler = () => {
    dispatch(dialogClose());
  };

  useEffect(() => {
    dispatch(dialogOpen());
  }, [dispatch]);
  return (
    <div>
      <OurMenu isOrderMenu={true}/>
      <DialogBox
        open={isOpen}
        handleClose={() => dispatch(dialogClose())}
        dialogTitle={"Would you like to order now?"}
        dialogContentText={
          "If you order now, you will be no required to wait after you visit us."
        }
        showCancelButton={true}
        cancelButtonText={"Not Now"}
        cancelHandler={() => cancelHandler()}
        okHandler={() => okHandler()}
        showOkButton={true}
        okButtonText={"Order Now"}
      />
    </div>
  );
};

export default OrderMenu;
