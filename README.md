# Response-Code-Structure

# Acme Company - Contact Us Page

## Name Section

 I will create a text field with an unlimted amount of space so every name will fit.
 
  **Questions -**
  1. Will each name be unuique?
  2. Is there a certain format you would like the names to be in (ex: first,last or last,first)? Placeholders will be added to the text field so the user clearly      sees how to format thier names. 
  
## Phone Number Section

I will create a text felid with enough unlimted amount of space so any phone number can fit. To follow your proper fotmatting (xxx-xxx-xxxx), there are many efficent ways of handling that format. The site will update automatically update on every user change, formatting the number accordingly.

**For Example consider this function -**

```
const formatPhoneNumber = (number) => {

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
```
This is a basic format on how I would format your phone numbers. Given its a diffrent country my code would change sighty.

**Questions -**

       1.Will your users have to enter phone numbers that aren't US based? It helps to know all the possible phone number that could be enterned so I know how to format my code. 

## Emal Section

I will create a text field with an unlimted amount of space so every email will fit. Because each department depends on the email entered its best to have emails follow a certain format so it can be routed to the correct department. For example my email could be **acmemarcus123@sales.com**, that would be routed to the Sales department because of **@sales.com**. Using this convention would be easy for the user to know how to proprely type thier email taht matches its department. A place holder will also be added in the text field so users can see beforehad how to properly type thier emails.

If a user enters in a email that dosen't match the corect department, an error will be shown above the email text box reminding the user to use a email that corresponds to the correct department. 

## Department Section

I will create a dropdown menu of the list of aliavble departments for the user to select from. This way no typing is done by the user and ensures there will be no errors when selecting the correct department. Each department will be associated with a unuique email address. 
 
In the future you may have a user with multiple email addresses in diffrent departments, to address this issue, like explained in the email section. Its best to have emails follow a format
 
 **Questions -**
  1. Is it safe to say for each department a different type of email is associated with it? For example, if my department is Sales my email must be associated with the sales department.

## Message Section

 I will create an expandable text field to type in that has a limit on how many characters can be typed. This way it can prevent any messages that is to long.

 **Questions -**
  1. Will your users who use this form need to send anything other than just text. For example someone may need to send  a PDF, CSV, txt file, etc ... If so, it      is possible to add a feature to attach files and text in the message section.
  2. Is there a limit on how long a message should be? If there is, please let me know.

# Spam Risk

# A Hidden Email In Souece Code

# Additional Features  
* If you want to give your customer the option add files or text such as PDF, CSV, txt, etc ... It would be easier and neat for the user to have seprate section under messages to attach a file. That would also be faster for my development team rather than doing this all in the message section. 

* I understand in the future you might have to add an adtional department yourself which also means another email to also consider. One way I can take care of this is to make an admin login that allows you to create as many departments as you need. At the same time you will be able to create a new type of email routed to your new department. This way it is secure, it prevents someone who dosent have admin access to create a new department and gmail. By doing it this way, it will be clear to you how to create content without editing the source code. With an admin accout on your website its also possible to edit other parts of your site and or your contact form per your request. More details explained in the dpearment and email sections.
    * In the future you may even have to change how emails are formatted. However with an admin login its possible to edit all of your department and what email     format it should follow. This way you have complete flexablity on departments routed with Emails.

# General Understanding 
* Upon a user succesfully completeing this form then clicking send/submit, where is this form data being sent to? Do you want it to sent to a email, a internal source, etc..? This is very important because this contact form data needs to be sent to somewhere so you can view it.

# Technology Recommendations
To craete this form I recommend using React.js then utiizing its hooks and functions to create this form. React hooks have a great state/data mangment system, allowing allowing me to do more with less code! Hooks also provide you with dozens of useful functions to manage how data flows and can be reused through your entire applaction. Because react is also a component based library it makes working with smaller parts of a website eaiser (like this contact form), I can control what happens to each from element every time there is a single change. To also mention React is also faster than lots of librarys and frameworks due to the fact it runs on a virtual DOM.

I say, Javascript in general would also be the way to go because of how secure, fast and helpfull it can be. 🚀 
