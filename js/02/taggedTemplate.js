// Írj egy olyan függvényt (tagged template), amely a paraméterként kapott texts, 
// values értékeket úgy adja vissza egy string-ben, hogy a text értékek dőltek, 
// a value-k félkövérek legyenek, ha beillesztjük a HTML-be, tehát a megfelelő tagekkel kiegészített string-et adjon vissza!

 const taggedTemplate = (texts, ...values) =>
     texts.map((text, index) =>
         `${text === ' ' ? '' : `<em>${text}</em>`}
          ${values[index] ? `<strong>${values[index]}</strong>` : ''}`
     ).join('');


export default taggedTemplate;