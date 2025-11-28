# 101516423_comp3123_labtest2 – Weather App

## Student Info
**Name:** Anudhin Thomas  
**Student ID:** 101516423  
**Course:** COMP 3123 – Full Stack Development I  
**Lab Test 2 – Weather App**

---

## Description

This is a React Weather App that displays current weather information for any city using the **OpenWeatherMap** API.

Users can:

- Search for any city  
- View current temperature  
- View weather condition & description  
- See min & max temperature  
- See feels-like temp  
- See humidity, pressure, and wind speed  
- View weather icon  
- Experience a clean, modern UI/UX with a responsive design  

This project demonstrates React **state**, **props**, **hooks**, and **API integration**, plus custom **glass-style UI**.

---

## Tech Stack

- React (Create React App)  
- JavaScript (ES6+)  
- Fetch API for API calls  
- CSS for styling  
- Hosted on Vercel (deployment)

---

## API Used

### **OpenWeatherMap – Current Weather API**

Endpoint used:

```text
https://api.openweathermap.org/data/2.5/weather?q={CITY_NAME}&appid={API_KEY}&units=metric



How to Run Locally

Clone the repository:

git clone https://github.com/Anudhin/101516423_comp3123_labtest2.git
cd 101516423_comp3123_labtest2


Install dependencies:

npm install


Add your API key
Open:

src/services/weatherApi.js


Replace:

const API_KEY = 'YOUR_API_KEY_HERE';


with your real API key.

Start the development server:

npm start


Open the browser:

http://localhost:3000

Live Demo (Vercel)
https://101516423-comp3123-labtest2.vercel.app/

Screenshots
<src="https://github.com/user-attachments/assets/28513f7d-505c-44de-949e-8d94e25c5e89"/>

<img width="960" height="504" alt="Screenshot 2025-11-27 195017" src="https://github.com/user-attachments/assets/d6851374-752d-4b77-a8d3-df51d48a93f9" />

Local 3000
<img width="960" height="468" alt="Screenshot 2025-11-27 195041" src="https://github.com/user-attachments/assets/3c50e1f1-1666-4c1e-b943-533ec60d84b8" />

postman

<img width="960" height="566" alt="Screenshot 2025-11-27 194537" src="https://github.com/user-attachments/assets/2c2197db-1374-48bb-b9b4-bc84a5c5daa0" />



End of README
