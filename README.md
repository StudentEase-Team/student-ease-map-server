# StudentEase Map Server
![logolight](https://github.com/user-attachments/assets/9c9bc68e-8c7c-4fb4-8d68-7aa4d2f057c0)

**Note: this app is not meant to be run standalone; it is a helper app for a front-end app.**

StudentEase Map Server is a react-based web application designed to display 3D objects. The application is built to work seamlessly across different platforms, rendering the 3D object using an iframe on the web and a WebView on mobile devices.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)

## Features

- **Cross-Platform Support:** Renders 3D objects using iframe for web and WebView for mobile platforms.
- **Responsive Design:** Optimized for various screen sizes and devices.
- **Orbital Controls:** Using orbital controls flip, move and rotate the model to your hearts content!

## Prerequisites

This app needs node.js to run.

## Installation

To install and set up the application locally, follow these steps:

1. **Clone the repository:**

```bash
git clone https://github.com/StudentEase-Team/student-ease-map-server.git
```

2. **Install dependencies:**

- While in student-ease-map-server directory, run:

```bash
npm install
```

3. **Start the development server:**

```bash
npm start
```

## Usage

The application will run on http://localhost:3000. This endpoint should be fetched from frontend, in order to display the maps.

If you wish to view the models locally, after runnin the app see the routes in [routes.tsx](student-ease-map-server/src/routes.tsx). For example, if you were to run this in your browser:
```
http://localhost:3000/nastavniblok/ucionice/6
```
You should be able to see something like this:
![Animation](/misc/Animation.gif)
