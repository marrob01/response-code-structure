import React from 'react'
import {useState} from 'react'

function From() {
// Using rect hooks
// Using hooks
  // State to hold form data
  const [phoneData, setPhoneData] =  useState("")
  const [valuef, setValue] = useState("");


  // My function to format the incoming data(numbers). This function generally works well
  const formatPhoneNumber = (number) => {

    // This line of code took me some time and studying to find out I need to turn my number parameter into a string before I can work with it. It came back as just a number when invoking this function. Then I used .replace to get rid of digits and charterer and return my number parameter into a string!!!
    const phoneNumber = number.replace(/[^\d]/g, "");

    const phoneNumberLength = phoneNumber.length
    // console.log(number)
    // If a user only types in 3 numbers then return those numbers. It helps with any bugs that may happen when a use types in more than 3 numbers
    if( phoneNumberLength < 4) return phoneNumber

    // Less than 7 numbers
    if(phoneNumberLength < 7) {return `${phoneNumber.slice(0, 3,)}-${phoneNumber.slice(3)}`}

    // last, return all numbers greater then 7 formatted
    if(phoneNumberLength < 9 ) return  `${phoneNumber.slice(0, 3,)}-${phoneNumber.slice(3, 6)}-${number.slice(6, 10)}`

  }
  // Its best to use a function to format a number then another helper to function handle changes every time a user enters a number. Then updating the current state/data on every change
  // A function to handle change on the phone number element.
  const handlePhoneData = (event) => {
    const phoneNumber = formatPhoneNumber(event.target.value);
    setPhoneData(phoneNumber)
  }

  // Submit the form function
  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.value = ''
    alert(
        " You got the job Marcus!!"
    )
    // Clear form after completing
  }

  // Given more time my plain for logic with department to email section was to create an object with it's keys as departments and its values as emails.
  // Then using a loop, loop through each key in my object as department form values. Then do conditional rendering to determine if the department matches the correct email
  // This way in the future when the admin logs into the site to make a change, they will be adding and removing from an object.


    return (
        <div>

            {/* An example form on how I would start to code this form in react. Just in need of more in-line logic and variables for email and department */}
            <form onSubmit={handleSubmit}>
                <label> Name </label>
                <input type="text"   onChange={(e) => setValue(e.target.value)}/>
                <label> Phone Number </label>
                    <input type="text" value={phoneData} onChange={(event) => handlePhoneData(event) } />

                <label> Email</label>
                    <input type="text"  onChange={(e) => setValue(e.target.value)} />

                <label> Department </label>
                    <input type="text" onChange={(e) => setValue(e.target.value)} />

                <label> Message </label>
                    <input type="text"  onChange={(e) => setValue(e.target.value)}/>

                <input type="submit" value="Submit" />
        </form>


        </div>
    )
}

export default From
