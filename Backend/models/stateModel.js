// models/stateModel.js
const db = require('../config/db');

exports.createState = async (stateData) => {
  const { stateName, countryId } = stateData;

  const [results] = await db.promise().execute(
    'INSERT INTO state (state_name, country_id) VALUES (?, ?)',
    [stateName, countryId]
  );

  return results.insertId;
};
