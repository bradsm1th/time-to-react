const express = require("express");
const router = express.Router();
const locationsController = require("../../controllers/locations");

/*---------- Public Routes ----------*/
router.post('/', locationsController.create);
router.get('/', locationsController.index);
router.delete('/:id', locationsController.deletePlace);
/*---------- Protected Routes ----------*/

module.exports = router;
