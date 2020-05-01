import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC28QCkXi-u3i4Jfb2gm-sq5DsfBh09x9g",
  authDomain: "sangha-list.firebaseapp.com",
  databaseURL: "https://sangha-list.firebaseio.com",
  projectId: "sangha-list",
  storageBucket: "sangha-list.appspot.com",
  messagingSenderId: "88701160259",
  appId: "1:88701160259:web:ae5e109694f0a7fcd7fdf6"
};

/**
 * takes and array of objects and stores them on firebase with the given key
 * @param {string} collectionKey: name of collection to store on firebase
 * @param {array} objectsToAdd: array of objects to add to firebase
 */
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);

  //need to do a batch-write to make sure all the objects get added even if internet fails
  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();  //get a blank document in this collection
      console.log(newDocRef);
      batch.set(newDocRef, obj);
  })

  return await batch.commit();
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;

const days = {
  daily: [],
  sunday: [],
  monday: [],
  tuesday: [],
  wednesady: [],
  thursday: [],
  friday: [],
  saturday: []
}

// console.log(snapshot.docs);
//for each doc, add it to the proper array of days
async function populateDays() {

  const sanghasRef = firestore.collection('data');
  const snapshot = await sanghasRef.get();

  snapshot.docs.forEach( async ( doc ) => {
    const docRef = firestore.doc( doc.ref.path );
    const docSnap = await docRef.get();
    const data = docSnap.data();
    // console.log(data);

    if( data.sunday ){ 
      console.log(days.sunday.length);
      days.sunday.push( docSnap.id );
    }
  })

}
