const busModel= require("../models/busModel");

const createBus = async(req,res)=>{
    try{
       const {busNumber,totalSeats,availableSeats}=req.body;
       if(!busNumber||!totalSeats||!availableSeats){
        return res.status(400).json({message:"busNumber,totalSeats and availableSeats are required"})
       }
       const result = await busModel.createBus(busNumber,totalSeats,availableSeats);
      res.status(201).json({
      message: "Bus created successfully",
      userId: result.insertId,
    });
 
    }catch(error){
        res.status(500).json({error:error.message});
    }
};

const getBusByAvailableSeat = async(availableSeats)=>{
try{
     const {availableSeats}=req.params;
     const [bus] = await busModel.getBusByAvailableSeat(availableSeats);
     if(!bus){
        return res.status(404).json({message:"bus not found"});
     }
     res.json(bus);
}catch(error){
        res.status(500).json({error:error.message});
}
};

module.exports={
    createBus,
    getBusByAvailableSeat,
};