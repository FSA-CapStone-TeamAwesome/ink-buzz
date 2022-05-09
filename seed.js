const { getFirestore } = require('firebase-admin/firestore');

const admin = require('firebase-admin');

const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://ink-buzz-default-rtdb.firebaseio.com',
});

const db = getFirestore();

const testRead = async () => {
  const snapshot = await db.collection('users').get();
  snapshot.forEach((doc) => {
    console.log(doc.id, '=>', doc.data());
  });
};

testRead();

const writeTest = async () => {
  const docRef = db.collection('users').doc('alovelace');

  await docRef.set({
    first: 'Ada',
    last: 'Lovelace',
    born: 1815,
  });

  const aTuringRef = db.collection('users').doc('aturing');

  await aTuringRef.set({
    first: 'Alan',
    middle: 'Mathison',
    last: 'Turing',
    born: 1912,
  });
};

writeTest();
