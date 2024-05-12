const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const Biodata = require('../models/resumeDataModel');

exports.protected = async (req, res) => {
  try {
    // Fetch biodata for the logged-in user
    const biodata = await Biodata.findOne({ userId: req.userId });
    if (!biodata) {
      return res.status(404).json({ message: 'Biodata not found for this user' });
    }
    res.status(200).json({ biodata });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while fetching biodata' });
  }
};

exports.getBiodata = async (req, res) => {
  try {
    const biodata = await Biodata.findOne({ userId: req.userId });
    if (!biodata) {
      return res.status(200).json({});
    }
    res.status(200).json(biodata);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while fetching biodata' });
  }
};

exports.storeBiodata = async (req, res) => {
  try {
    const { firstName, lastName, age } = req.body;
    const user = req.userId;
    const biodata = {
      userId: req.userId,
      infodetail: req.body
    };
    const result = await Biodata.findOneAndUpdate(
      { userId : user },
      biodata,
      { upsert: true, new: true } // Set new option to true to return the updated document
  );

  // console.log(result);
    res.status(201).json({ message: 'Biodata stored successfully' });
    // console.log("Data saved!");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while storing biodata' });
  }
};
