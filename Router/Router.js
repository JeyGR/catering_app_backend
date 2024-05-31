const express = require("express");
const router = express.Router();
const {
  register,
  login,
  getCatermenu,
  create_checkout_session,
  getallCater,
  addOrderToProfile,
  getOrderDetails,
} = require("../Controller/controller");

router.route("/signin").post(register);
router.route("/login").post(login);
router.route("/catermenu/:catername").get(getCatermenu);
router.route("/create_checkout_session").post(create_checkout_session);
router.route("/getallcater").get(getallCater);
router.route("/addodertoprofile").post(addOrderToProfile);
router.route("/getorderdetails").post(getOrderDetails);

module.exports = router;
