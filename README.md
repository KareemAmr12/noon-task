This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# My Next.js Project

Welcome to my Next.js project! This repository contains the source code for a social media-style web application.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Additional Information](#additional-information)
- [Contributing](#contributing)
- [License](#license)

## Overview

This project is a social media-style web application built with Next.js. It allows users to view and interact with posts. The application is designed to be responsive and provides a seamless user experience.

## Features

- View and interact with posts
- Favorites tab for viewing favorite posts
- Responsive design for mobile and desktop
- Customizable navigation bar (automatically changes based on media used)

## Technologies Used

- Next.js
- React
- SASS (styling)
- Unsplash API (for images)
- Local Storage (for saving favorites)

## Installation

To get a local copy up and running follow these simple steps.

### Prerequisites

- Node.js (version 14.x or later)
- npm (version 6.x or later)

### Installation Steps

1. Clone the repository:

   ```sh
   git clone https://github.com/KareemAmr12/noon-task.git
   ```

2. Navigate to the project directory:

   ```sh
   cd noon-task
   ```

3. Install the dependencies:
   ```sh
   npm install
   ```

## Running the Project

1. Start the development server:

   ```sh
   npm run dev
   ```

2. Open your browser and go to `http://localhost:3000` to view the application.

## Additional Information

- **Images**: The application uses images from Unsplash. Make sure to configure the `next.config.js` to allow image hosting from Unsplash.
- **Styling**: The application uses SASS for styling. Each component has its own css styling for modular and maintainable styles.
- **Local Storage**: The favorites feature uses local storage to save and retrieve favorite posts.

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.
