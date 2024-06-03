# Posts Application

This is a React application that displays a list of posts and their details. Users can navigate through the posts, view details, and search for posts by title.

## Features

- Display a list of posts
- View details of a selected post
- Paginate through posts
- Search posts by title

## Technologies Used

- React
- TypeScript
- SCSS
- JSONPlaceholder API

## Getting Started

These instructions will help you set up and run the project on your local machine.

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (https://nodejs.org/)
- npm (comes with Node.js) or Yarn (https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
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

- [Your Name](https://github.com/your-username)

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
