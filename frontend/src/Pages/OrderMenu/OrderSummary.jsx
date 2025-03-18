import { useSelector } from "react-redux";
import OrderedItemCard from "./OrderedItemCard";
import classes from "./OrderSummary.module.css";
import { Button, Typography } from "@mui/material";
import icons from "../../assets/icons";
// import images from "../../assets/images";
import { clearOrderItems } from "../../redux/reducer/orderReducer";
import { useDispatch } from "react-redux";

const OrderSummary = () => {
  const { ResetIcon, noOrder } = icons;
  // const { orderNow } = images;
  const dispatch = useDispatch();
  const orderedItems = useSelector((state) => state.order.orderedItems);
  const orderedCategories = [
    ...new Set(orderedItems.map((menu) => menu.category)),
  ];
  return (
    <div className={classes["order_summary_container"]}>
      <div className={classes["order_summary"]}>
        <div className={classes["order_summary_heading_container"]}>
          <Typography>ORDER SUMMARY</Typography>
          <ResetIcon
            sx={{ cursor: "pointer", color: "#D91656" }}
            onClick={() => dispatch(clearOrderItems())}
          />
        </div>
        <div className={classes["order_summary_items"]}>
          {orderedItems.length > 0 ? (
            orderedCategories.map((category, index) => (
              <div className={classes["order_summary_item"]} key={index}>
                <h1 className={classes["order_summary_item_heading"]}>
                  {category}
                </h1>
                {orderedItems
                  .filter((menu) => menu.category === category)
                  .map((menu, index) => (
                    <div
                      className={classes["order_summary_item_details"]}
                      key={index}
                    >
                      <OrderedItemCard item={menu} />
                    </div>
                  ))}
              </div>
            ))
          ) : (
            <div className={classes["order_summary_empty"]}>
              <img
                src={noOrder}
                alt=""
                style={{  }}
                className={classes["order_summary_empty_image"]}
              />
              <Typography className={classes["order_summary_empty_text"]}>Waiting for your order!</Typography>
            </div>
          )}
        </div>
        <div className={classes["order_summary_total"]}>
          <Typography className={classes["order_summary_total_heading"]}>
            TOTAL
          </Typography>
          <Typography className={classes["order_summary_total_price"]}>
            ₹{orderedItems.reduce((acc, item) => acc + item.price, 0)}
          </Typography>
        </div>
        <div className={classes["order_summary_button_container"]}>
          <Button color="success" variant="contained">
            PLACE ORDER
          </Button>
          <Button color="error" variant="outlined">
            CANCEL
          </Button>
          <Button color="warning" variant="outlined">
            CLEAR
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
