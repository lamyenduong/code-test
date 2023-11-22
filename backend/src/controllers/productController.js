const pool = require("../config/database");

const getAllProducts = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM shoes");
    if (result.rows.length > 0) {
      res.status(200).json(result.rows);
    } else {
      res.status(404).json({ message: "No products found" });
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await pool.query(
      "SELECT id, image, name, description, price, color FROM shoes WHERE id = $1",
      [id]
    );
    if (result.rows.length > 0) {
      res.status(200).json(result.rows[0]);
    } else {
      res.status(404).json({ message: "No products found" });
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const createProducts = async (req, res) => {
  let image = req.body.image;
  let name = req.body.name;
  let description = req.body.description;
  let price = req.body.price;
  let color = req.body.color;
  try {
    const result = await pool.query(
      "INSERT INTO shoes (image, name, description, price, color) VALUES ($1, $2, $3, $4, $5)",
      [image, name, description, price, color]
    );
    if (result) {
      res.status(200).json(result.rows);
    } else {
      res.status(404).json({ message: "Creation failed." });
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await pool.query("DELETE FROM shoes WHERE id = $1", [id]);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "Remove failed." });
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateProduct = async (req, res) => {
  let image = req.body.image;
  let name = req.body.name;
  let description = req.body.description;
  let price = req.body.price;
  let color = req.body.color;
  try {
    const id = req.params.id;
    const result = await pool.query(
      "UPDATE shoes SET image = $1, name = $2, description = $3, price = $4, color = $5 WHERE id = $6",
      [image, name, description, price, color, id]
    );
    if (result) {
      res.status(200).json(result.rows);
    } else {
      res.status(404).json({ message: "Update failed." });
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProducts,
  deleteProduct,
  updateProduct,
};
