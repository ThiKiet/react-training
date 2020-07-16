import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA56NK30q9W7UPjGHV_SOu8Q1n_jddCLxU",
    authDomain: "crud-example-41040.firebaseapp.com",
    databaseURL: "https://crud-example-41040.firebaseio.com",
    projectId: "crud-example-41040",
    storageBucket: "crud-example-41040.appspot.com",
    messagingSenderId: "987998876076",
    appId: "1:987998876076:web:f353604f155f932d4c8a09",
    measurementId: "G-ZHV15L4VJB"
};

firebase.initializeApp(config);
firebase.analytics();

export default firebase;