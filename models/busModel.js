const pool = require("../config/db");

const createBus = async(busNumber,totalSeats,availableSeats)=>{
    const [result] = await pool.execute("insert into buses (busNumber,totalSeats,availableSeats) values (?,?,?)",
    [busNumber,totalSeats,availableSeats]);
    return result;
}


const getBusByAvailableSeat = async(availableSeats)=>{
    const [result] = await pool.execute("select * from buses where availableSeat >=?",[availableSeats]);
    return result[0];
}

module.exports={
    createBus,
    getBusByAvailableSeat,
};