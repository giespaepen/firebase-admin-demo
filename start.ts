import * as admin from "firebase-admin";

const app: admin.app.App = admin.initializeApp({
  credential: admin.credential.cert({})
});

console.log(app.name);
