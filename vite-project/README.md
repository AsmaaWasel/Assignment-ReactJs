# Posts Application

This React application showcases a list of posts and their respective details. Users can seamlessly navigate through the posts, delve into specific post details, and efficiently search for posts by title.

## Features

- Display a list of posts
- View details of a selected post
- Paginate through posts for enhanced navigation
- Search posts by title for quick access

## Technologies Used

- React
- TypeScript for enhanced type safety and developer productivity
- SCSS for styling
- JSONPlaceholder API for fetching mock data
- Redux for state management, facilitating better control and scalability
- Vite for optimized and faster development experience
- Responsiveness ensured for seamless usage across devices

## Getting Started

These instructions will guide you through setting up and running the project on your local machine.

### Prerequisites

Ensure that you have the following installed:

- Node.js ([Download here](https://nodejs.org/))
- npm (included with Node.js) or Yarn ([Installation guide](https://yarnpkg.com/))

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AsmaaWasel/Assignment-ReactJs.git
   cd Assignment-ReactJs

   ```

2. Install dependencies:

   Using npm:

   ```bash
   npm install
   ```

   Or using Yarn:

   ```bash
   yarn install
   ```

### Running the Application

1. Start the development server:

   Using npm:

   ```bash
   npm start
   ```

   Or using Yarn:

   ```bash
   yarn start
   ```

2. Open your browser and navigate to `http://localhost:3000`.

### Folder Structure

- `src/`
  - `components/` - Contains all the React components
    - `postList/` - PostList component and styles
    - `postDetails/` - PostDetails component and styles
    - `pagination/` - Pagination component and styles
  - `interfaces/` - TypeScript interfaces for the data models
  - `styles/` - Global styles and variables
  - `App.tsx` - Main application component
  - `index.tsx` - Entry point of the application

### Usage

- On the main page, you can see a list of posts.
- Click on a post title to view its details.
- Use the pagination buttons to navigate through pages of posts.
- Use the search bar to filter posts by title.

### Author

- Asmaa Mohammed https://github.com/AsmaaWasel/Assignment-ReactJs.git

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

### Upcoming Updates

Addition of tests using Jest with Vite and TypeScript in the React project.