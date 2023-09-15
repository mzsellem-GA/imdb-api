'use client'
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function ShowFacts() {
   const [catFacts, setCatFacts] = useState([]);
   const [loading, setLoading] = useState(true);
 
   useEffect(() => {
     async function fetchCatFacts() {
       try {
         const response = await fetch('https://cat-fact.herokuapp.com/facts');
         if (!response.ok) {
           throw new Error('Network response was not ok');
         }
         const data = await response.json();
         setCatFacts(data);
         setLoading(false);
       } catch (error) {
         console.error('Error fetching cat facts:', error);
       }
     }
 
     fetchCatFacts();
   }, []);
   return (
      <>
         <Link href="/">HOME</Link>
         <div className="font-bold m-6">
            <h1>CAT FACT LIST</h1>
         </div>
         <div>
      {loading ? (
        <p>Loading cat facts...</p>
      ) : (
        <ul>
          {catFacts.map((fact) => (
            <li key={fact._id}>{fact.text}</li>
          ))}
        </ul>
      )}
    </div>
      </>
   );
}
