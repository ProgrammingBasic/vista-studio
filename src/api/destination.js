import { destinationRef } from "../lib/database";
import { query, where, limit, getDocs } from "firebase/firestore";

export async function getFeaturedDestinations() {
    try {
        const q = query(destinationRef, where("isFeatured", "==", true), limit(5));
        const querySnapshot =  await  getDocs(q);
        const featuredDestinations = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        return featuredDestinations;
    } catch (error) {
        console.error("Error fetching featured destinations: ", error);
        return [];
    }
}