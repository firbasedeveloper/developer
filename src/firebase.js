import firebase from 'firebase';

// const firebaseConfig = {
// 	apiKey: 'AIzaSyAEbLAdrjku2gpaKsh5GR2oxjOl7hUk6Ao',
// 	authDomain: 'social-media-af76e.firebaseapp.com',
// 	databaseURL: 'https://social-media-af76e.firebaseio.com',
// 	projectId: 'social-media-af76e',
// 	storageBucket: 'social-media-af76e.appspot.com',
// 	messagingSenderId: '857490492784',
// 	appId: '1:857490492784:web:7f27816dee41baea6453b5',
// 	measurementId: 'G-TCC95P55KS'
// };
const firebaseConfig = {
	apiKey: "AIzaSyAplTDQKqTRCxPpytNpVYe_AZd29rGd2f0",
	authDomain: "social-blog-aba55.firebaseapp.com",
	databaseURL: 'https://social-blog-aba55-default-rtdb.firebaseio.com/',
	projectId: "social-blog-aba55",
	storageBucket: "social-blog-aba55.appspot.com",
	messagingSenderId: "63633636225",
	appId: "1:63633636225:web:d7cc0397b434c4018ac680",
	measurementId: "G-4VXCSJ2F3F"
  };

//connecting frontend to backend

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
