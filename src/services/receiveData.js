const { Firestore } = require('@google-cloud/firestore');

async function receiveData() {
  const db = new Firestore();
  const predictCollection = db.collection("predictions");
  const snapshot = await predictCollection.get();
  const result = snapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      result: data.result,
      createdAt: data.createdAt,
      suggestion: data.suggestion,
      id: data.id,
    };
  });
  return result;
}

module.exports = receiveData;
