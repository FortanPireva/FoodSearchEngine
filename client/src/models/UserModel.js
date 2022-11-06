import Firebase from "../firebase/firebase";
import { addDoc, collection } from "firebase/firestore";

const firebase = Firebase.instance;
export class UserModel {
  constructor(user) {
    this.userId = user.uid;
    this.email = user.email;
    this.photoURL = user.photoURL ?? "";
    this.firstName = user.firstName;
    this.lastName = user.lastName;
  }

  async save() {
    await addDoc(collection(firebase.firestore(), "users"), {
      firstName: this.firstName,
      userId: this.userId,
      lastName: this.lastName,
      photoURL: this.photoURL,
      email: this.email,
    });
    return this;
  }
}

export default UserModel;
