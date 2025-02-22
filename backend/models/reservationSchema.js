import mongoose from 'mongoose';
import validator from 'validator';
import shortid from "shortid";

const reservationSchema = new mongoose.Schema({
    resId: {
        type: String,
        default: shortid.generate,
        unique: true
    },
    firstName: {
        type: String,
        required: true,
        minLength: [3, "First name must contain at least 3 characters!"],
        maxLength: [30, "First name cannot exceed 30 characters!"],
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "Last name must contain at least 3 characters!"],
        maxLength: [30, "Last name cannot exceed 30 characters!"],
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Provide a valid email"], // Fixed email validation
    },
    phone: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^\d{11}$/.test(v); // Ensures exactly 11 digits
            },
            message: "Phone number must contain exactly 11 digits!",
        },
    },
    time: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
});

// ✅ Correct default export for ES Modules
const Reservation = mongoose.model("Reservation", reservationSchema);
export default Reservation;
