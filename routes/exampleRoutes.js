const router = require("express").Router();
const { reqExample, resExample } = require("../controllers/exampleController");

router.post("/ccareq", reqExample);

router.post("/ccares", resExample);

module.exports = router;
