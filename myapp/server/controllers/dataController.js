const dataModel = require('../models/dataModel');

const createRecords = async (req, res) => {
  try {
    await dataModel.createRecords();
    res.status(200).send('Records created successfully');
  } catch (error) {
    console.error('Error creating records:', error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = { createRecords };