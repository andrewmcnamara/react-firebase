import React from 'react';
import firebase from './firebase';
import { useCollection } from 'react-firebase-hooks/firestore';

const FirestoreCollection = () => {
  const { error, loading, value } = useCollection(
    firebase.firestore().collection('classes')
  );
  return (
    <div>
      <p>
        {error && <strong>Error: {error}</strong>}
        {loading && <span>Collection: Loading...</span>}
        {value && (
          <span>
            Collection:{'classes'}
            {value.docs.map(doc => (
              <React.Fragment key={doc.id}>
                {JSON.stringify(doc.data())},{' '}
              </React.Fragment>
            ))}

            {new firebase.firestore.Timestamp(1551686400,0).toDate().toString()}
          </span>
        )}
      </p>
    </div>
  );
};

export default FirestoreCollection;
