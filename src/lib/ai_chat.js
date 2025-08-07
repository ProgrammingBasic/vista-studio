import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

const packageText = `# Mystic Tawang Package - 5 Days / 4 Nights  
**PACKAGE CODE:** 005  
**PRICE:** From ₹8,000  

---

## Overview

### Embark on a Mystical Tawang Expedition
Dive into the enchanting landscapes of Arunachal Pradesh with our **5-day Mystical Tawang Package**.  

Immerse yourself in the cultural richness of Tawang, from the historic **Tawang Monastery** to the serene shores of **Sela Lake**. This meticulously crafted journey combines breathtaking scenery, historical marvels, and local immersion — promising an unforgettable adventure.  

Book now for an escape to the mystical heart of the Himalayas, where every moment is a discovery.  

**#MysticalTawang #ExploreArunachal #JourneyToTheHimalayas**

---

## Itinerary

### **Day 1: Guwahati - Dirang**
- Pickup Time: **6:00 AM**
- Breakfast at **Nagaon Bypass**
- Innerline Permit Entry and Lunch at **Bhalukpong**
- En route visits:
  - **Kameng River**
  - **Nichiphula Waterfall**
- Tea break at **Nag Temple**
- Bonfire and Live Music
- Dinner
- **Overnight Stay at Dirang**

---

### **Day 2: Dirang - Tawang**
- Breakfast and Check-out from the homestay
- En route visits:
  - **Sela Pass**
  - **Sela Lake**
  - **Jaswant Garh War Memorial**
- Lunch at Jung
- Visit **Nuranang Falls**
- Dinner
- **Overnight Stay at Tawang**

---

### **Day 3: Tawang Exploration**
- Breakfast  
- Drive to **Bumla Pass** and **Shonga-Tser Lake**
- Lunch at Tawang
- Dinner
- **Overnight Stay in Tawang**

---

### **Day 4: Tawang - Bomdila**
- Visit:
  - **Tawang Monastery**
  - **Buddha Statue**
  - **Tawang War Memorial**
- Bonfire & Live Music

---

### **Day 5: Bomdila - Guwahati**

---

## Locations to Cover
- **Sela Pass**  
- **Bumla Pass**  
- **Madhuri Lake**  
- **Tawang Buddhist Monastery**  
- **Jaswant Garh**  
- **Nuranang Falls**  
- **Tawang War Memorial**  
- **Pangateng Tso Lake**  
- **Gorsam Chorten**  
- **Nzgula Lake**  
- **Eagle Nest Wildlife Sanctuary**  
- **Gorichen Peak**  
- **Gyangong Ani Gompa**  

---

## Inclusions
- Transportation  
- Accommodation  
- Meals  
- Inner Line Permit  
- Driver  
- First Aid Kit  
- Sightseeing  

---

## Highlights
- Visit to newly explored locations around **Tawang**
- Scenic drive through **Sela Pass**
- **Buddhist Monastery Tour**
- **Bonfire & Live Music** evenings
- Trip to **Nuranang Falls**

`;

const systemPrompt = `
You are a friendly and knowledgeable travel assistant for the Mystic Tawang - 5 Days / 4 Nights package (Package Code: 005).

Your role is to answer customer questions about the trip, itinerary, destinations, inclusions, exclusions, and travel tips. Always provide helpful, accurate, and conversational answers based on the provided package details.

The package information is provided in markdown format.

Guidelines:

Always stay polite, friendly, and encouraging.

If the question is about pricing, inclusions, or exclusions, answer using the package information and clarify if something is NOT included.

If the user asks for travel advice (e.g., “What should I pack?” or “Is Bumla Pass accessible in winter?”), provide relevant suggestions and practical guidance.

If the question is outside the package scope (e.g., booking flights, visa requirements), gently redirect by saying you can provide general advice but that the user should confirm with official sources.

Mention the highlights and unique experiences when possible to make the trip appealing.

If unsure, say: “I don't have that specific information, but I can guide you on how to find out.

`;

const chat = ai.chats.create({
    model: "gemini-2.0-flash",
    history: [
        {
            role: "user",
            parts: [{ text: systemPrompt }],
        },
        {
            role: "user",
            parts: [{ text: packageText }],
        },
    ],
});

export async function run_query(text) {

    const response = await chat.sendMessage({
        message: text,
    });

    return response.text;
}