import ErrorHandler from "../error/error.js";
import Menu from "../models/menuSchema.js";

export const sendMenu = async (req, res, next) => {
  const { menus } = req.body; // Expecting an array of menus

  if (!menus || !Array.isArray(menus) || menus.length === 0) {
    return next(new ErrorHandler("Please provide a valid menu list!", 400));
  }

  try {
    // Validate each menu item
    for (const menu of menus) {
      const { category, type, item, fullPrice } = menu;

      if (!category || !type || !item || !fullPrice) {
        return next(new ErrorHandler("Each menu item must have category, type, item, and fullPrice!", 400));
      }
    }

    // Insert all menus in bulk
    const insertedMenus = await Menu.insertMany(menus);

    res.status(200).json({
      success: true,
      message: "Menus added successfully.",
      insertedMenus
    });

  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return next(new ErrorHandler(validationErrors.join(","), 400));
    }
    return next(error);
  }
};

export const getAllMenus = async (req, res, next) => {
    try {
      const menus = await Menu.find();
  
      if (!menus || menus.length === 0) {
        return next(new ErrorHandler("No menu items found!", 404));
      }
  
      res.status(200).json({
        success: true,
        count: menus.length,
        menus,
      });
    } catch (error) {
      return next(error);
    }
  };