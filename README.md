# RA-LawScoutProject
Law Scout Incorporation Form (June 2017)
 
Written by:
Jason Ng, Victoria Trzcianowski, Jose Pilapil,
 
Project
===============
Create a single page web application in which a form would calculate the savings in incorporating versus proprietary. 
 
Web Application Includes :
- Responsive web structure for mobile and desktop resolutions
- Three sliders that adjust Annual Income, Annual Expenses, Monthly Living Expenses. 
- A large display to showcase savings value
- Tax cost for incorporating vs proprietary
- Selector for industry/career 
- 6 questions (answered Yes or No)
- Email and Name fields for email report
 
Extras to Application:
- Email layout/template to be used for reporting to user
 
 
 
Use/Installation
===========================
Core files are included in the package and are used to edit the application as needed. Files needed to run the web application are located in the DIST folder. Copy the files to the desired location on web hosting server.
 
The web application is targeted to a demo Mailchimp account to send the information. Hoster will need to have an account with Mailchimp and set up a signup form with the following fields to match the application's key values:
 
** ALL KEYS ARE CASE SENSITIVE AND ARE IN ALL CAPS **
NAME
EMAIL
AINCOME
AEXPENSE
MEXPENSE
SAVINGS
INDUSTRY
RISK
Q1
Q2
Q3
Q4
Q5
Q6
 
Your form url with included id will have a post url that will need to be placed within the controller/service.js file on line 108.
 
After setting up the signup form. You will need to add the provided email template. Go to the Admin dashboard and go to templates at the top nav. Create template and choose paste code. Copy and paste the inline email code provided and save.
 
Afterwards automation rule should be added to allow automatic email posting will be done once the user finishes the form. To do so, go to the administrative dashboard and select automation on the top nav. Create a new workflow with the Welcome Email function. Setup the initial desired information. Set the trigger to immediately (the default is after 1 day). Select the provided email template in the saved templates section. Finish up the setup following the instructions and the automation workflow should be complete.
 
Anyone that completes the form will receive an email from Mailchimp to confirm the email. After the user confirms the email. Mailchimp servers will automatically send the email template with personal response to the user’s provided email.
 
 
