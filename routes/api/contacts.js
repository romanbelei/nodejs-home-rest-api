const express = require("express");
const { validation, ctrlWrapper } = require("../../middlewares");
const { schemas } = require("../../models");
const { contacts } = require("../../controllers");
const { auth } = require("../../middlewares");
const router = express.Router();
const {
  addContact,
  getAll,
  getContactById,
  removeContact,
  updateContact,
  updateStatusContact,
} = require("../../controllers");

router.get("/", auth, ctrlWrapper(contacts.getAll));

router.get("/:contactId", ctrlWrapper(contacts.getContactById));

router.post(
  "/",
  auth,
  validation(schemas.contactAddSchema),
  ctrlWrapper(contacts.addContact)
);

router.put(
  "/:contactId",
  validation(schemas.contactUpdateSchema),
  ctrlWrapper(contacts.updateContact)
);

router.patch(
  "/:id/favorite",
  validation(schemas.updateFavorite),
  ctrlWrapper(contacts.updateStatusContact)
);

router.delete("/:contactId", ctrlWrapper(contacts.removeContact));

module.exports = router;
