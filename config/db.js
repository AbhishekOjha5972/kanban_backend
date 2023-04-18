const mongoose = require("mongoose")
require('dotenv').config()

const kanbanDB = mongoose.connect(process.env.kanbanURL);

module.exports = {kanbanDB}