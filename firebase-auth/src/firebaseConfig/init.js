import firebase from 'firebase';
let firebaseConfig = {
    apiKey: "AIzaSyBYR_J6_4RfiLDcGpQcbMEInl4O8ZAVwTA",
    authDomain: "test-firebase-web-1b221.firebaseapp.com",
    databaseURL: "https://test-firebase-web-1b221.firebaseio.com",
    projectId: "test-firebase-web-1b221",
    storageBucket: "test-firebase-web-1b221.appspot.com",
    messagingSenderId: "163799128909",
    appId: "1:163799128909:web:5b5ec1fb07c96b82f83504"
  };

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const providers = [
    new firebase.auth.GoogleAuthProvider(),
    new firebase.auth.GithubAuthProvider(),
];

export const [ googleAuthProvider, githubAuthProvider] =  providers;