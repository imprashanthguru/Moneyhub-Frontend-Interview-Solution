# Moneyhub Tech Test - Property Details

This is a prototype of a new feature in Moneyhub
Customers will now be able to receive automatic value updates on their properties
and we would like to enhance the experience by summarizing their changes

Please read this whole document before starting

This prototype is built using NextJS and makes use of styled components

## Requirements

We would like you to:

----

**Required**: Add a "Valuation changes" section to the page. `design-mock-up.png` has been provided as a design reference for the page and `detail-design-mock-up.png` shows the specific feature to be added, including how it is styled responsively. Make use of existing fonts and styles to match the look and feel of the existing app rather than trying to match the mock up exactly.

 ```
  sincePurchase = `recentValuation - originalPurchasePrice`
  sincePurchasePercentage = `sincePurchase / originalPurchasePrice * 100`
  annualAppreciation =`sincePurchasePercentage / number of years since purchase`
  colours used for the positive change in the image are #c2f7e1 and #006b57
 ```

Consider what other data this component could take and how that might affect your theming and solution

Consider opportunities to reduce repetition in the code and increase legibility
- This could be creating new components, simplifying existing ones, extracting helper function to simplify code or styling
- Show us what you can do and implement a few of these if you have time

We also ask that you update the readme with answers to the following questions 

1. Given more time, what other changes you would have liked to make?
2. What UX or design improvements or alterations might you suggest? These can be to existing components or completely new ideas.

Ans. 1: 

- Add new features: Based on user feedback, we may consider adding new features to the website to enhance the user experience. This could include features like a search bar, a contact form or a chatbot.

- Adding more animations and interactions: Animations and interactions can make the website more visually appealing and engaging. By adding more animations and interactions, users are more likely to stay on the website for longer and engage more with its content. 

- Notification: We could add notification feature: We can use Firebase Cloud Messaging or OneSignal. These services can be integrated into your website or app to send push notifications to users. 

Ans. 2: 
I can provide some suggestions for improvements to UX or design in this project:
 
- Improve accessibility: It's essential to ensure that the website is accessible to all users, regardless of their ability. This includes adding alt tags to images, providing sufficient color contrast, and using proper markup.

- Simplify navigation: Navigation is a crucial aspect of user experience. We need to ensure that users can easily find what they're looking for by simplifying the navigation structure and making it easy to use.

- Optimize for speed: Website speed is critical for user experience, and it can also impact search engine rankings. Optimizing images, minifying code - especially the js, css, and using a content delivery network (CDN) are some of the ways to improve website speed. 

- Improve the user interface: The user interface (UI) should be intuitive and easy to use and should follow design principle's.

- Conduct user testing: Testing with real users is an essential part of improving user experience. You may consider conducting usability tests or gathering feedback from users to identify areas of improvement and make data-driven decisions.

Overall, the goal should be to create a website that is user-friendly, accessible, and engaging. These are some suggestions that I think we could implement in the future. 

----

**Optional**: If you have time, show us some more by fetching the data from the api
  - Currently the property data is hardcoded in the component, but it is also avaible via a Next.js api route
  - Details of a property are located in the API at `/api/account`, use this endpoint to populate the app with data
  - Use whichever method or library you are comfortable with to fetch the data

----

Try to:

- Ensure markup is semantic and accessible
- Make use of a centralised theme
- Make effective use of Git

We prefer:

- Functional React components
- `styled-components` for styling
- `prop-types` for typechecking

----

**IMPORTANT**

Most of your work should take place inside the `components/` and `modules/` directory. There are some example components and styles available and the theme is defined in `theme/`. This task has been mocked up in Next.js to provide a full working environment and as such shouldn't be taken as a _complete_ application. We are interested in assessing your React frontend skills and are not testing your knowledge of Next.js, you should not need to make any changes in the `pages/` directory.

### Notes

We recommend working through the list of requirements above but don't expect you to finish all of them. We're more interested in seeing how you approach the problem than seeing a perfect example, please only spend a few hours working on it. 

On completion, email a link to your repository to your contact at Moneyhub, and ensure it is publicly accessible.

## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3333](http://localhost:3333) with your browser to see the result.

You can start by looking at `modules/property-details/index`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
