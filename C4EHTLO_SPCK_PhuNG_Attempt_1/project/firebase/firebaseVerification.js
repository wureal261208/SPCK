import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });

const status = await validatePassword(getAuth(), passwordFromUser);
if (!status.isValid) {
    const needsLowerCase = status.containsLowercaseLetter !== true;
}