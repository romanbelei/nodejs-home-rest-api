const express = require("express");

const { validation, ctrlWrapper, auth } = require("../../middlewares");
const { auth: ctrl } = require("../../controllers");
const { joiRegisterSchema, joiLoginSchema } = require("../../models/user");

const router = express.Router();

router.post(
  "/register",
  validation(joiRegisterSchema),
  ctrlWrapper(ctrl.register)
);
// router.post("/signup")

router.post("/login", validation(joiLoginSchema), ctrlWrapper(ctrl.login));
// router.post("/signin")

router.get("/logout", auth, ctrlWrapper(ctrl.logout));
//router.get("signout")

module.exports = router;
