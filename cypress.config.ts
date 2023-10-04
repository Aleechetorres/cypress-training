import { defineConfig } from "cypress";

module.exports = defineConfig({
    e2e: {
      setupNodeEvents(on, config) {},
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
      }
    }
  });