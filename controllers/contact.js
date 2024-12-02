//require of Model (collection)
const Contact = require("../models/Contact");
//add a contact to BD
exports.addContact = async (req, res) => {
  try {
    const { name, email, adress, phone } = req.body;
    const contactToAdd = new Contact({ name, email, adress, phone });
    await contactToAdd.save();
    res
      .status(200)
      .json({ msg: "the contact is added succesfully", contactToAdd });
  } catch (error) {
    res.status(400).json(error);
  }
};
///____________________________________________________________________________________
//get all contacts
exports.listContacts = async (req, res) => {
  try {
    const list = await Contact.find();
    res.status(200).json({ msg: "the list", list });
  } catch (error) {
    res.status(400).json(error);
  }
};
//get One Contact
exports.getOneContact = async (req, res) => {
  try {
    const { _id } = req.params;
    const contactToGet = await Contact.findById({ _id });
    if (contactToGet) {
      res.status(200).json({ msg: "the contact is:", contactToGet });
    } else {
      res.status(404).json({ msg: "the contact is not found!!" });
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

//UPDATE
exports.updateContact = async (req, res) => {
  try {
    const { _id } = req.params;
    const contactToUpdate = await Contact.findByIdAndUpdate(
      { _id },
      { $set: { ...req.body } },
      { new: true }
    );
    contactToUpdate
      ? res
          .status(200)
          .json({ message: "Contact updated Successfully!!!", contactToUpdate })
      : res.status(404).json({ msg: "Not found" });
  } catch (error) {
    res.status(400).json({ msg: "The Error is", error });
  }
};

//DELETE
exports.delContact = async (req, res) => {
  try {
    const { _id } = req.params;
    const contactToDel = await Contact.findByIdAndDelete({ _id })
    contactToDel ? res.status(200).json({ msg: "contact deleted successfully..." }) :
      res.status(404).json({msg:"not found"})

  } catch (error) {
      res.status(400).json({ msg: "The Error is", error });
  }
}