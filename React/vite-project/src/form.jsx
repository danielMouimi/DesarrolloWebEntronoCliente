import React, { useState } from 'react';
export function Form(){
    
      const [firstName, setFirstName] = useState('');
      const [lastName, setLastName] = useState('');

      function fullname() {
        alert("hello "+ firstName+" "+lastName);
      }


    return (
      <>
        <div>
        <input
          type="text"
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <button onClick={fullname}>
          GREET ME
        </button>
      </div>
 
      </>
    );
}