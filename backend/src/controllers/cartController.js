const pool = require("../config/database");

const addToCart = async (req, res) => {
  let quantity = req.body.quantity;
  try {
    const id = req.params.id;
    const result = await pool.query(
      "INSERT INTO cart (product_id, quantity) VALUES ($1, $2)",
      [id, quantity]
    );
    if (result.rows.length > 0) {
      res.status(200).json(result.rows);
    } else {
      res.status(404).json({ message: "Add failed" });
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getCart = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM cart");
    if (result.rows.length > 0) {
      res.status(200).json(result.rows);
    } else {
      res.status(404).json({ message: "No products in cart" });
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateCart = async (req, res) => {
  let quantity = req.body.quantity;
  try {
    const id = req.params.id;
    const result = await pool.query(
      "UPDATE cart SET quantity = $1  WHERE product_id = $2",
      [quantity, id]
    );
    if (result.rows.length > 0) {
      res.status(200).json(result.rows);
    } else {
      res.status(404).json({ message: "No products in cart" });
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteCart = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await pool.query("DELETE FROM cart WHERE product_id = $1", [
      id,
    ]);
    if (result.rows.length > 0) {
      res.status(200).json(result.rows);
    } else {
      res.status(404).json({ message: "No products in cart" });
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { addToCart, getCart, updateCart, deleteCart };
