# Aura-Component-Contact-Creation
 This aura app gives the user a form to create a new contact in salesforce. On a successfull save, a success message is displayed and
 an error message in case of failure.
 
 Description of components : 
 1. ContactCreationApp.app => this is the mail application. Consists of header and contact creation component.
 2. ContactCreationHeader.cmp => the header for the application.
 3. ContactCreation.cmp => consists of form component and cosmetic tags for UI
 4. ContactCreationForm.cmp => takes user input via a form and calls onclick function to save the record.
 5. ContactCreationFormController.js => saves the records and calls helper methods to display success or failure messages.
 6. ContactCreationFormHelper.js => shows the success and failure toast messages.
 7. ContactCreationItem.cmp => shows the saved contact details in the output.
