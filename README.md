# Novu Inbox Vanilla JS

This is a vanilla JavaScript implementation of the Novu Inbox component, allowing you to integrate in-app notifications into your web application.

## Prerequisites

- Node.js (v20 or higher)
- npm
- [A Novu account](https://dashboard.novu.co/) and credentials
- Vite (included as a dev dependency)

## Setup

1. Clone this repository:
```bash
git clone <your-repo-url>
cd novu-inbox-vanilla_js
```

2. Install dependencies:
```bash
npm install
```

3. Configure Novu:
   Open `src/app.js` and update the following configuration:
   ```javascript
   applicationIdentifier: "YOUR_APP_ID", // Replace with your Novu app ID
   subscriberId: "YOUR_SUBSCRIBER_ID", // Replace with your subscriber ID
   ```
   You can find these values in your Novu dashboard.

## Running the Application

### Development Mode
To run the application in development mode:
```bash
npm run dev
```
This will start the Vite development server with hot module replacement (HMR) at `http://localhost:5173`

### Production Build
To create a production build:
```bash
npm run build
```
This will create an optimized production build in the `dist` directory using Vite's build process.

To preview the production build:
```bash
npm run preview
```

## Features

- Real-time notifications
- Notification inbox
- Mark as read/unread functionality
- Notification preferences

## Technologies Used

- Vanilla JavaScript
- Vite (Modern frontend build tool with fast hot module replacement)
- Novu SDK (@novu/js)

## Resources

- [Novu Homepage](https://novu.co)
- [Novu Documentation](https://docs.novu.co)
- [Novu Inbox Component Documentation](https://docs.novu.co/platform/inbox/overview)

## License

ISC 