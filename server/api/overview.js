const router = require("express").Router();
const { CustomerLoan, CustomerDemographic } = require("../db");

//GET /api/overview
router.get("/", async (req, res, next) => {
  try {
    const data = await CustomerLoan.findByPk("23344");
    res.json(data);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
