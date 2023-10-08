import { defineConfig } from "cypress";

module.exports = defineConfig({
    e2e: {
      setupNodeEvents(on, config) {
        on('task', {
          isFileExist(filePath) {
            const fs = require('fs');
            return fs.existsSync(filePath);
          }
        });
      },
      baseUrl: "https://www.demoblaze.com/index.html",
      defaultCommandTimeout: 50000,
      pageLoadTimeout: 50000,
    },
    
    env:{
      User: {
      userName: 'aleechetorres',
      password: '1234567'
      },

      Products: {
        phoneElement: {
          name: 'Iphone 6 32gb',
          category: "Phones"
        },
        laptopElement: {
          name: 'MacBook Pro',
          category: "Laptops"
        },
        monitorElement:{
          name: 'Apple monitor 24',
          category: "Monitors"
        }
      },

      PlaceOrder: {
        name: 'Aleja',
        country: 'Colombia',
        city: 'Manizales',
        creditCard: '3029-9876-4653',
        month: '06',
        year: '2026',
      },

      ContactInfo: {
        email: 'aleechetorres@gmail.com',
        name: 'Aleja Echeverri',
        message: 'Espero ser muy buena en QA <3'
      },

      UserInfoForm: { 
        name: 'Alejandra',
        lastname: 'Echeverri',
        email: 'ale@gmail.com',
        gender: 'Female',
        number: '3012144284',
        year: '1991',
        subject: 'Computer Science',
        hobbies: 'Sports',
        address: 'Cra 21-21',
        state: 'Haryana',
        city: 'Karnal'
      },
      "compilerOptions": {
        "types": ["cypress", "cypress-file-upload"]
      }
    },
    
  });