const HouseController = require('../controllers/house.controller');

module.exports = app => {
    app.get('/api/homes', HouseController.allMyHomes);
    app.get('/api/homes/:id', HouseController.getOneHouse);
    // app.patch('/api/homes/:id', HouseController.updateExistingHomes);
    // app.post('/api/homes', HouseController.createNewHomes);
    // app.delete('/api/homes/:id', HouseController.deleteAnExistingHomes);
}