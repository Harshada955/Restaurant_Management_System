import Order from '../models/orderSchema.js';
import Menu from '../models/menuSchema.js';
import Reservation from '../models/reservationSchema.js';

export const placeOrder = async (req, res, next) => {
    const { resId, menuItems } = req.body;

    if (!resId || !menuItems || menuItems.length === 0) {
        return res.status(400).json({
            success: false,
            message: "Please provide reservation ID and menu items."
        });
    }

    try {
        const reservation = await Reservation.findById(resId);
        if (!reservation) {
            return res.status(404).json({
                success: false,
                message: "Reservation not found!"
            });
        }

        let totalAmount = 0;
        const detailedMenuItems = [];

        for (const item of menuItems) {
            const menu = await Menu.findById(item.menuId);
            if (!menu) {
                return res.status(404).json({
                    success: false,
                    message: `Menu item with ID ${item.menuId} not found!`
                });
            }

            const itemTotal = (item.halfQty || 0) * (menu.halfPrice || 0) +
                              (item.fullQty || 0) * (menu.fullPrice || 0);

            totalAmount += itemTotal;

            detailedMenuItems.push({
                menuId: item.menuId,
                itemName: menu.item,
                halfQty: item.halfQty || 0,
                fullQty: item.fullQty || 0,
                price: itemTotal
            });
        }

        const newOrder = await Order.create({
            resId,
            menuItems: detailedMenuItems,
            totalAmount
        });

        res.status(201).json({
            success: true,
            message: "Order placed successfully!",
            orderDetails: newOrder
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
