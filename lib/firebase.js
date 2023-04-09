import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCXj0rao9ku8zmbLub1VhigEGYS__pZm_c",
  authDomain: "mindsprint-dev.firebaseapp.com",
  projectId: "mindsprint-dev",
  storageBucket: "mindsprint-dev.appspot.com",
  messagingSenderId: "181224307494",
  appId: "1:181224307494:web:2072f71bf3b00140031fe7",
  measurementId: "G-BNW9GTLE82"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
  signInWithPopup(auth, googleProvider)
    .then((res) => {
      // console.log(res.user)
      localStorage.setItem('aa-auth', JSON.stringify(res.user))
      window.location.reload()
    }).catch((err) => {
      alert(err)
    })
}

export const signOutGoogle = () => {
  signOut(auth)
    .then((res) => {
      alert('Logged Out Successfully!')
      localStorage.removeItem('aa-auth')
      window.location.reload()
    }).catch((err) => {
      alert(err)
    })
}