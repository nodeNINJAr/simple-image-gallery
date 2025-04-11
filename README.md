
# Simple Image Gallery

A simple, modern image gallery built with **Next.js**, **React**, and **Material UI**. This gallery supports infinite scrolling and integrates with **Cloudinary** for image hosting.

---

## Table of Contents

- [Simple Image Gallery](#simple-image-gallery)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Development Server](#development-server)
    - [Build for Production](#build-for-production)
  - [Configuration](#configuration)
  - [Dependencies](#dependencies)
  - [Development](#development)
  - [Troubleshooting](#troubleshooting)

---

## Introduction

**Simple Image Gallery** is a lightweight web app designed to showcase image collections efficiently. With infinite scroll and responsive layout using MUI components, it's optimized for both performance and user experience. Cloudinary handles backend image hosting and delivery.

---

## Features

- 🌄 Responsive image gallery layout
- 🔁 Infinite scroll for seamless loading
- ☁️ Cloudinary integration for image hosting
- 🎨 Styled with MUI and Emotion
- 🚀 Built on Next.js with TypeScript support

---

## Installation

1. **Clone the repository**  
   ```bash
   git clone https://github.com/nodeNINJAr/simple-image-gallery
   cd simple-image-gallery
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

---

## Usage

### Development Server

To run the development server with Turbopack:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

### Build for Production

```bash
npm run build
npm start
```

---

## Configuration

To integrate with Cloudinary:

1. Create a `.env.local` file in the project root.
2. Add the following environment variables:

```env
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

## Dependencies

**Runtime:**
- `next` ^15.2.5
- `react` ^19.0.0
- `react-dom` ^19.0.0
- `@mui/material` ^7.0.2
- `@emotion/react` ^11.14.0
- `@emotion/styled` ^11.14.0
- `axios` ^1.8.4
- `cloudinary` ^2.6.0
- `react-infinite-scroll-component` ^6.1.0

**Dev:**
- `typescript` ^5.x
- `eslint` ^9.x
- `@types/react` ^19.x
- `eslint-config-next` ^15.2.5

---

## Development

Lint the codebase:

```bash
npm run lint
```

---

## Troubleshooting

- **Images not loading?**  
  Check your Cloudinary credentials in `.env.local`.

- **Build errors?**  
  Ensure you're using compatible versions of Node.js and npm.
