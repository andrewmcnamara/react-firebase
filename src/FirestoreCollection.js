import React from 'react'
import firebase from './firebase'
import { useCollection } from 'react-firebase-hooks/firestore'
import PropTypes from 'prop-types'

const AttendenceList = ({ attendees }) => (
  <ul>
    {attendees.map(attendee, idx => (
      <li key={idx}>{attendee.email}</li>
    ))}
  </ul>
)
AttendenceList.propTypes = {
  attendees: PropTypes.array,
}
const FirestoreCollection = () => {
  const { error, loading, value } = useCollection(
    firebase.firestore().collection('classes'),
  )

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
                <AttendenceList attendees={doc.data().attendees} />
                {JSON.stringify(doc.data())},{' '}
                {JSON.stringify(doc.data().attendees)}
                {new firebase.firestore.Timestamp(
                  doc.data().starts_at.seconds,
                  0,
                )
                  .toDate()
                  .toString()}
              </React.Fragment>
            ))}
            {new firebase.firestore.Timestamp(1551686400, 0)
              .toDate()
              .toString()}
          </span>
        )}
      </p>
    </div>
  )
}

export default FirestoreCollection
