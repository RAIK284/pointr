const storeItemController = require("../controllers/storeItemController");
const express = require("express");

module.exports = (app) => {
    const express = require("express");
    const router = express.Router();

    router.get('/api/storeItem', storeItemController.readStoreItem);

    router.post('/api/storeItem', storeItemController.createStoreItem);

    router.patch('/api/storeItem', storeItemController.updateStoreItem);

    router.delete('/api/storeItem', storeItemController.deleteStoreItem);

    app.use('/', router);
};