const functions = require("firebase-functions");
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
// The Firebase Admin SDK to access Firestore.
const admin = require("firebase-admin");
admin.initializeApp();
const { sendSMS } = require("./twilio/sendSMS");
const BASE_URL = "https://foodsearch-927fe.web.app";
module.exports.createProduct = functions
  .region("europe-west3")
  .firestore.document("products/{productId}")
  .onCreate(async (snap, context) => {
    // Get an object representing the document
    // e.g. {'name': 'Marie', 'age': 66}
    try {
      const productId = context.params.productId;
      const newValue = snap.data();

      // access a particular field as you would any JS property
      const name = newValue.title;
      const category = newValue.category;

      functions.logger.log("Product id " + productId);
      functions.logger.log(newValue);
      let snapshot = await admin
        .firestore()
        .collection("userNotifications")
        .where("category", "==", category)
        .get();

      functions.logger.log(newValue);
      let notifications = snapshot.docs;
      functions.logger.log("notifications");
      functions.logger.log(notifications);

      if (notifications && notifications.length > 0) {
        let url = `${BASE_URL}/products/${productId}`;
        notifications.forEach((notification) => {
          let { phoneNumber } = notification.data();
          functions.logger.log("phoneNumber");
          functions.logger.log(phoneNumber);

          let body = `Near-Expiry Product : ${name} of cat:${category} 
                    You can find more details here: ${url}
            `;
          sendSMS(body, phoneNumber);
        });
      }
    } catch (error) {
      functions.logger.error(error);
    }

    // perform desired operations ...
  });
