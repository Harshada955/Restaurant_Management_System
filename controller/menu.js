 import ErrorHandler  from "../error/error.js";
 import Menu from '../models/menuSchema.js';

 export const sendMenu = async (req, res, next) => {
  const { category, subCategory, type, item, halfPrice, fullPrice } = req.body;

  if (!category || !type || !item || !fullPrice) {
      return next(new ErrorHandler("Please fill full menu form!", 400));
  }

  try {
      await Menu.create({
        category,
        subCategory,
        type,
        item,
        halfPrice,
        fullPrice
      });

      res.status(200).json({
          success: true,
          message: "Menu sent successfully."
      });

  } catch (error) {
      if (error.name === "ValidationError") {
          const validationErrors = Object.values(error.errors).map(err => err.message);
          return next(new ErrorHandler(validationErrors.join(","), 400));
      }
      return next(error);
  }
};





