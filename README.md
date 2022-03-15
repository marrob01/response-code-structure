# Response-Code-Structure

# To start the applaction

Run **npm i** then **npm start**


# Acme Company - Contact Us Page

## Name Section

 I will create a text field with an unlimited amount of space so every name will fit.
 
  **Questions -**
  1. Will each name be unique?
  2. Is there a certain format you would like the names to be in (ex: first,last or last,first)? Placeholders will be added to the text field so the user clearly      sees how to format their names. 
  
## Phone Number Section

I will create a text field with an unlimited amount of space so any phone number can fit. To follow your proper formatting (xxx-xxx-xxxx), there are many efficient ways of handling that format. The site will update automatically update on every user change, formatting the number accordingly.

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

    // last, return all numbers greater than 7 formatted
    if(phoneNumberLength < 9 ) return  `${phoneNumber.slice(0, 3,)}-${phoneNumber.slice(3, 6)}-${number.slice(6, 10)}`

  }
```

This is a basic format on how I would format your phone numbers. Given it's a different country my code would change sighty.

When a user types in thier phone number, the phone number form element will automatacly fomat the number. This way there won't be any erros when typing a number. 

**Questions -**

 1.Will your users have to enter phone numbers that aren't US based? It helps to know all the possible phone numbers that could be entered so I know how to format my code. 

## Emal Section

I will create a text field with an unlimited amount of space so every email will fit. Because each department depends on the email entered, it's best to have emails follow a certain format so it can be routed to the correct department. For example my email could be **acmemarcus123@sales.com**, that would be routed to the Sales department because of **@sales.com**. Using this convention would be easy for the user to know how to properly type the email that matches its department. A place holder will also be added in the text field so users can see beforehand how to properly type their emails.

If a user enters in an email that doesn't match the correct department, an error will be shown above the email text box reminding the user to use an email that corresponds to the correct department. 

 **Questions -**
  1. What would be then best format or how shold I format emails for your convinence?  

## Department Section

I will create a dropdown menu of the list of available departments for the user to select from. This way no typing is done by the user and ensures there will be no errors when selecting the correct department. Each department will be associated with a unique email address. 
 
In the future you may have a user with multiple email addresses in different departments, to address this issue, like explained in the email section. It's best to have emails follow a format.
 
 **Questions -**
  1. Is it safe to say for each department a different type of email is associated with it? For example, if my department is Sales my email must be associated with the sales department.

## Message Section

 I will create an expandable text field to type in that has a limit on how many characters can be typed. This way it can prevent any messages that are too long.

 **Questions -**
  1. Will your users who use this form need to send anything other than just text. For example someone may need to send  a PDF, CSV, txt file, etc ... If so, it      is possible to add a feature to attach files and text in the message section.
  2. Is there a limit on how long a message should be? If there is, please let me know so I can make a maximum amount of charters to type.

# A Hidden Email In Source Code

It is possible and there are a few methods to hide your source code, stop users from inspecting the source code, prevent users from pressing keys to access the source code, and most importantly obfuscate files. By following this general pattern it will be really hard for someone to find the source code. Even if they did manage to find the source code, it won't be readable by humans when those files are sent to the client. 

There are plenty of online tools that can be integrated into our web application to obfuscate files depending on the language. By also writing some functions inside of my code, It can be very annoying to view the source code. It would take a user a credible amount of time to decrypt and debug the application just to view my code in a readable format.

# Additional Features  
* If you want to give your customer the option add files or text such as PDF, CSV, txt, etc ... It would be easier and neat for the user to have a separate section under messages to attach a file. That would also be faster for my development team rather than doing this all in the message section. 

* I understand in the future you might have to add an additional department yourself which also means another email to also consider. One way I can take care of this is to make an admin login that allows you to create as many departments as you need. At the same time you will be able to create a new type of email routed to your new department. This way it is secure, it prevents someone who doesn't have admin access to create a new department and gmail. By doing it this way, it will be clear to you how to create content without editing the source code. With an admin account on your website its also possible to edit other parts of your site and or your contact form per your request. More details explained in the department and email sections.
    * In the future you may even have to change how emails are formatted. However with an admin login its possible to edit all of your department and what email     format it should follow. This way you have complete flexibility on departments routed with Emails.

# General Understanding 
* Upon a user successfully completing this form then clicking send/submit, where is this form data being sent to? Do you want it to sent to an email, an internal source, etc..? This is very important because this contact form data needs to be sent somewhere so you can view it. It would also help identify how to prevent spam risk, user bots, etc...

# Technology Recommendations
To create this form I recommend using React.js then utilizing its hooks and functions to create this form. React hooks have a great state/data management system, allowing me to do more with less code! Hooks also provide you with dozens of useful functions to manage how data flows and can be reused through your entire application. Because react is also a component based library it makes working with smaller parts of a website easier (like this contact form), I can control what happens to each form element every time there is a single change. To also mention React is also faster than lots of libraries and frameworks due to the fact it runs on a virtual DOM.

I say, Javascript in general would also be the way to go because of how secure, fast and helpful its methods can be. 🚀 


