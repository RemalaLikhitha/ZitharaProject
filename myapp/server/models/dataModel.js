const pool = require('../database');

const createRecords = async () => {
  try {
    // Loop to create 50 records
    for (let i = 1; i <= 50; i++) {
      const customerName = Customer ${i};
      const age = Math.floor(Math.random() * 50) + 20; // Random age between 20 and 70
      const phone = '123-456-7890'; // Dummy phone number
      const location = 'Location'; // Dummy location
      const createdAt = new Date(); // Current timestamp
      
      // Insert record into the database
      await pool.query('INSERT INTO mydb (customer_name, age, phone, location, created_at) VALUES ($1, $2, $3, $4, $5)', [customerName, age, phone, location, createdAt]);
    }
    console.log('Records created successfully.');
  } catch (error) {
    console.error('Error creating records:', error);
    throw error;
  }
};

module.exports = { createRecords };