import { collection, getFirestore } from 'firebase/firestore'
import { app } from './firebaseInit'

export const db = getFirestore(app)


export const destinationRef = collection(db, "Destinations")