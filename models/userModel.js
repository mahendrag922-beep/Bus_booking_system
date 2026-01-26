const pool = require("../config/db");

// INSERT user
const createUser = async (name, email) => {
  const [result] = await pool.query(
    "INSERT INTO users (name, email) VALUES (?, ?)",
    [name, email]
  );
  return result;
};

// UPDATE user
const updateUser = async (id, name, email) => {
  const [result] = await pool.query(
    "UPDATE users SET name = ?, email = ? WHERE id = ?",
    [name, email, id]
  );
  return result;
};

// DELETE user
const deleteUser = async (id) => {
  const [result] = await pool.query(
    "DELETE FROM users WHERE id = ?",
    [id]
  );
  return result;
};

module.exports = {
  createUser,
  updateUser,
  deleteUser,
};
