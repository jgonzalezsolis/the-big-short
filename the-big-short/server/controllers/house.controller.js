
const House = require('../models/house.model');

module.exports ={
    allMyHomes: (req,res) => {
        House.find({})
            .then((houses)=>{
                res.json(houses)
            })
            .catch((err)=>{
                res.json({message: 'Error in controllers for find all houses',
                error: err})
            })
    },
    getOneHouse: (req, res) => {
                res.json({ message: "get one house route" })
    }
}



