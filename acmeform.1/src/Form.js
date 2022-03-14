
import React from 'react'
import {useState} from 'react'

function Form() {
  // Using rect hooks
  // State to hold form data
    const [phoneData, setPhoneData] =  useState({
       name: '',
  	   phoneNumberData: '',
  	   email: '',
       department: '',
       message: ''
    })

  // Given more time, I would complete routing the email to department section like this
  // First I would make a new state that holds the email routes like so
  // I was also thinking of a better way of doing this so it works dynamically. Meaning in the future if there is an admin account, the admin can make changes with ease and no errors
  const [emailRoutes, setemailRoutes] =  useState({
     marketing: '@marketing.com',
     sales: '@sales.com',
     email: '@email.com',

  })
  // Then just compare the current value of the deparment (phoneData.department) to my emailRoutes state in my email form element.

  // My function to format the incoming data(numbers)
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
    return `${phoneNumber.slice(0, 3,)} - ${phoneNumber.slice(3, 6)} - ${phoneNumber.slice(6, 10)}`

    // I can also use regex to change my format to xxx-xxx-xxxx

  }
  // Its best to use a function to format a number then another helper to function handle changes every time a user enters a number. Then updating the current state/data on every change
  // A function to handle change on the phone number element.
  const handlePhoneData = (event) => {
    const phoneNumber = formatPhoneNumber(event.target.value);
    setPhoneData((values) => ({
      ...values,
      phoneNumberData: phoneNumber,
    }))
  }
  //Now one function to handle change for each form element. Again, all im doing here again is updating the current state.
  const handleNameData = (event) => {
    setPhoneData((values) => ({
      ...values,
      name: event.target.value,
    }))
  }
  const handleEmailData = (event) => {
    setPhoneData((values) => ({
      ...values,
      email: event.target.value,
    }))
  }
  const handleDepartmentData = (event) => {
    setPhoneData((values) => ({
      ...values,
      department: event.target.value,
    }))
  }
  const handleMessageData = (event) => {
    setPhoneData((values) => ({
      ...values,
      message: event.target.value,
    }))
  }

  // Submit the form function.
  const handleSubmit = (event) => {
    event.preventDefault();

    alert(
        " You got the job Marcus!!"
    )
    // Clear form after completing
  }

    return (
        <div>

            {/* An example form on how I would start to code this form in react. Just in need of more in-line logic and a few more variables added */}
            {/* To handle errors, and logic between department and email. My plan is to use jsx and tyranny operators to control the flow of the form. */}

            <form onSubmit={handleSubmit}>
                  <label for="name"> Name </label>
                  <input placeholder="First, Last" requried="true" type="text" id="name" value={phoneData.name} onChange={handleNameData}/>

                  <label for="phoneNumber"> Phone Number </label>
                  <input placeholder="Phone Number" requried="true" type="text" id="phoneNumber" value={phoneData.phoneNumberData} onChange={(event) => handlePhoneData(event) } />

                  <label for="email"> Email</label>
                  <input placeholder="name@deparment.com"requried="true" type="text" id="email" value={phoneData.email}  onChange={handleEmailData} />

                {/*  So if my current value is marketing for my deparment, then my email must contain the apporiate emailRote value. Given more time to work I would code this so its dynamic, and works no matter how many eamils and deparments are added. */}

                  <label for="department"> Department </label>

                  <select requried="true" value={phoneData.department} name ="department" id="department" onChange={handleDepartmentData} >
                    <option value="selectDepartment" selected="selected">Select Department</option>
                    <option value="marketing">Marketing</option>
                    <option value="sales">Sales</option>
                    <option value="support">Support</option>
                  </select>

                  <label for="message"> Message </label>
                  <input placeholder="Message" requried="true" type="text" id="message" value={phoneData.messages}  onChange= {handleMessageData}/>

                  <input type="submit" value="Submit" />
          </form>
        </div>
    )
}

export default Form
