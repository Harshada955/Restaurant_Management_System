import mongoose from 'mongoose';
import shortid from "shortid";

const orderSchema = new mongoose.Schema({
    orderId: { 
        type: String,
        default: shortid.generate,
        unique: true
    },
    resId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reservation',
        required: true
    },
    menuItems: [{
        menuId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Menu',
            required: true
        },
        halfQty: { type: Number, required: false, default: 0 },
        fullQty: { type: Number, required: false, default: 0 },
        price: { type: Number, required: true }
    }],
    totalAmount: {
        type: Number,
        required: true
    },
    orderDate: {
        type: Date,
        default: Date.now
    }
});

const Order = mongoose.model("Order", orderSchema);
export default Order;
