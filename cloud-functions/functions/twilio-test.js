const { sendSMS } = require("./twilio/sendSMS");

require("dotenv");

sendSMS("hey forti", "+4917612738396");
