import express from "express";
import { ctrlWrapper } from "../../helpers/ctrlWrapper.js";
// prettier-ignore
import { addContact, deleteContactById, getAllContacts, getContactById, updateContactById, updateStatusContact } from "../../controllers/contactsController.js";

const router = express.Router();

/* GET: // http://localhost:3000/api/contacts */
router.get("/", ctrlWrapper(getAllContacts));

/* GET: // http://localhost:3000/api/contacts/:contactId */
router.get("/:contactId", ctrlWrapper(getContactById));

/* POST: // http://localhost:3000/api/contacts/ 

*/
router.post("/", ctrlWrapper(addContact));

/* DELETE: // http://localhost:3000/api/contacts/:contactId */
router.delete("/:contactId", ctrlWrapper(deleteContactById));

/* PUT: // http://localhost:3000/api/contacts/:contactId 

*/
router.put("/:contactId", ctrlWrapper(updateContactById));

/* PATCH: // http://localhost:3000/api/contacts/:contactId/favorite

*/
router.patch("/:contactId/favorite", ctrlWrapper(updateStatusContact));

export { router };