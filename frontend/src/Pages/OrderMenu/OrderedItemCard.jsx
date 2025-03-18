import { Button, Typography } from "@mui/material";
import classes from "./OrderedItemCard.module.css";
import PropTypes from "prop-types";
import icons from "../../assets/icons";
import { useCallback, useMemo, useState } from "react";
import {
  removeOrderItem,
  updateOrderItem,
} from "../../redux/reducer/orderReducer";
import { useDispatch } from "react-redux";

const OrderedItemCard = ({ item }) => {
  const { AddCircleOutlineIcon, RemoveCircleOutlineIcon, DeleteOutlineIcon } =
    icons;
  const dispatch = useDispatch();
  const [removeItem, setRemoveItem] = useState(null);

  const orderedItem = useMemo(() => {
    const fullQty = item.fullQty >= 0 ? item.fullQty : 1;
    const halfQty = item.halfQty || 0;
    const price = item.fullPrice * fullQty + item.halfPrice * halfQty;

    return { ...item, fullQty, halfQty, price };
  }, [item]);

  const handleRemoveItem = useCallback(() => {
    dispatch(removeOrderItem(orderedItem._id));
    setRemoveItem(null);
  }, [dispatch, orderedItem._id]);

  const handleUpdateItem = useCallback(
    (isFull, increment) => {
      const updatedItem = {
        ...orderedItem,
        fullQty: isFull ? orderedItem.fullQty + increment : orderedItem.fullQty,
        halfQty: !isFull
          ? orderedItem.halfQty + increment
          : orderedItem.halfQty,
      };

      dispatch(updateOrderItem(updatedItem));
    },
    [dispatch, orderedItem]
  );

  const renderQuantityControl = (label, qty, isFull) => (
    <div className={classes["quantity_container"]}>
      <RemoveCircleOutlineIcon
        className={classes["add_remove_icon"]}
        style={{ cursor: qty === 0 ? "not-allowed" : "pointer" }}
        onClick={() => qty > 0 && handleUpdateItem(isFull, -1)}
      />
      <div className={classes["quantity_content_container"]}>
        <Typography className={classes["qty_text"]}>{label}</Typography>
        <Typography color="#D91656">{qty}</Typography>
      </div>
      <AddCircleOutlineIcon
        className={classes["add_remove_icon"]}
        onClick={() => handleUpdateItem(isFull, 1)}
      />
    </div>
  );

  return removeItem !== orderedItem._id ? (
    <div className={classes["ordered_item_card"]}>
      <div className={classes["card_details_row_1"]}>
        <Typography color="#FFB200" fontSize="1.025rem" fontWeight={600}>
          {orderedItem.item}
        </Typography>
        <Typography color="#EB5B00">
          {orderedItem.halfPrice > 0 && `${orderedItem.halfPrice}/`}
          {orderedItem.fullPrice}
        </Typography>
        <div className={classes["price_container"]}>
          <DeleteOutlineIcon
            color="error"
            onClick={() => setRemoveItem(orderedItem._id)}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
      <div className={classes["card_details_row_2"]}>
        {renderQuantityControl(
          item.halfPrice > 0 ? "Full QTY:" : "QTY:",
          orderedItem.fullQty,
          true
        )}
        {item.halfPrice > 0 &&
          renderQuantityControl("Half QTY:", orderedItem.halfQty, false)}
        <Typography color="#508D4E" fontSize="1.025rem" fontWeight={600}>
          ₹{orderedItem.price}
        </Typography>
      </div>
    </div>
  ) : (
    <div
      className={`${classes["ordered_item_card"]} ${classes["remove_item_card"]}`}
    >
      <Typography color="#fff" fontSize="1.025rem" fontWeight={600}>
        {`Are you sure to remove ${orderedItem.item}?`}
      </Typography>
      <div
        className={`${classes["card_details_row_2"]} ${classes["remove_item_card_row_2"]}`}
      >
        <Button
          variant="contained"
          onClick={handleRemoveItem}
          sx={{
            backgroundColor: "#fff",
            color: "#ff5252",
            "&:hover": { color: "black", fontWeight: "bold" },
          }}
          startIcon={<DeleteOutlineIcon />}
        >
          Yes
        </Button>
        <Button
          onClick={() => setRemoveItem(null)}
          sx={{
            backgroundColor: "#ff5252",
            color: "#fff",
            fontWeight: "bold",
            "&:hover": { color: "black", fontWeight: "bold" },
          }}
        >
          No
        </Button>
      </div>
    </div>
  );
};

OrderedItemCard.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    item: PropTypes.string.isRequired,
    fullPrice: PropTypes.number.isRequired,
    halfPrice: PropTypes.number,
    fullQty: PropTypes.number,
    halfQty: PropTypes.number,
  }).isRequired,
};

export default OrderedItemCard;
