const express = require("express");
const app = express();
const mysql = require("mysql2/promise");

const pool = mysql.createPool({
    host:"localhost",
    user:"root",
    database:"bus_booking_system",
    password:"Mahendra@10"
});

const createtables = async ()=>{
    try{
     await pool.query(`create table if not exists  Users 
        (id INT auto_increment primary key,
        name varchar(255) not null,
        email varchar(255) not null unique
        )`);
     await pool.query(`
      CREATE TABLE IF NOT EXISTS buses (
        id INT AUTO_INCREMENT PRIMARY KEY,
        busNumber VARCHAR(50) NOT NULL,
        totalSeats INT NOT NULL,
        availableSeats INT NOT NULL
      )
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS bookings (
        id INT AUTO_INCREMENT PRIMARY KEY,
        seatNumber INT NOT NULL
      )
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS payments (
        id INT AUTO_INCREMENT PRIMARY KEY,
        amountPaid DECIMAL(10,2) NOT NULL,
        paymentStatus VARCHAR(50) NOT NULL
      )
    `);

    console.log("✅ All tables created successfully");

    }catch(error){
        console.error("Database error:",error.message);
    }
}
createtables();
app.listen(3000,()=>{
    console.log("server is running");
});