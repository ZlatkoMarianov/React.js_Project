# CineVerse - Movie Management SPA

CineVerse is a single-page application for managing and browsing movies. Users can create, edit, delete their own movies, search and mark favorites.

## Features

### Public Part (Accessible without authentication)
- **Home Page** - Welcome page with project statistics and latest movies
- **Movies Catalog** - Browse all movies in the collection
- **Movie Details** - View detailed information about each movie
- **Search** - Search movies by title, genre, and year
- **Login/Register** - User authentication
  
### Private Part (Requires authentication)
- **Create Movie** - Add new movies to the catalog
- **Edit Movie** - Edit your own movies (owner-only)
- **Delete Movie** - Remove your own movies (owner-only)
- **My Movies** - View all movies created by you
- **Favorites** - Add/remove movies from favorites
- **Logout** - End user session

## Technologies Used

- **React 19.2.0** - UI library
- **React Router DOM 7.9.6** - Client-side routing
- **Vite** - Build tool and dev server
- **CSS Modules** - Component-scoped styling
- **react-toastify** - Toast notifications for better UX
- **Practice Server** - Backend API (SoftUni practice server)


## Project Structure

```
client/src/
├── components/
│   ├── auth/                  # Login, Register, Logout
│   ├── common/                # Spinner component
│   ├── favorites/             # Favorites page & button
│   ├── guards/                # Route protection (ProtectedRoutes, GuestRoutes)
│   ├── header/                # Navigation header
│   ├── footer/                # Footer component
│   ├── home/                  # Home page with latest movies
│   ├── movies/                # Movie-related components
│   │   ├── create/            # Create movie form
│   │   ├── details/           # Movie details page
│   │   ├── edit/              # Edit movie form
│   │   ├── movieCard/         # Movie card component
│   │   ├── movieForm/         # Shared form component
│   │   └── moviesCatalog/     # Movies catalog page
│   ├── myMovies/              # User's movies page
│   ├── notFound/              # 404 page
│   └── search/                # Search page
├── contexts/
│   └── AuthContext.jsx        # Authentication context
├── hooks/       
│   ├── useForm.js             # Form state management
│   ├── useRequest.js          # HTTP request wrapper
│   ├── useMovieService.js     # Movie CRUD operations
│   ├── useFavoriteService.js  # Favorites management
│   └── useValidation.js       # Form validation logic
├── App.jsx                    # Main app component with routes
└── main.jsx                   # App entry point
```

## Installation and Setup

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/ZlatkoMarianov/React.js_Project.git
   cd React.js_Project
   ```

2. **Install client dependencies**
   ```bash
   cd client
   npm install
   ```

3. **Start the backend server**
   ```bash
   cd server
   node server.js
   ```
   Server runs on `http://localhost:3030`

4. **Start the frontend development server**
   ```bash
   cd client
   npm run dev
   ```
   Client runs on `http://localhost:5173`

5. **Open the application**
   Navigate to `http://localhost:5173` in your browser

## Test Credentials

You can use these accounts for testing:
- Email: `peter@abv.bg` / Password: `123456`
- Email: `george@abv.bg` / Password: `123456`

Or register a new account.

## API Endpoints

The application uses the SoftUni Practice Server with the following endpoints:

### Authentication
- `POST /users/register` - Register new user
- `POST /users/login` - Login user
- `GET /users/logout` - Logout user

### Movies (CRUD)
- `GET /data/movies` - Get all movies
- `GET /data/movies/:id` - Get movie by ID
- `POST /data/movies` - Create new movie (requires auth)
- `PUT /data/movies/:id` - Update movie (requires auth + ownership)
- `DELETE /data/movies/:id` - Delete movie (requires auth + ownership)

### Favorites
- `GET /data/favorites` - Get user favorites
- `POST /data/favorites` - Add to favorites
- `DELETE /data/favorites/:id` - Remove from favorites

### Search
- `GET /data/movies?where=...` - Search/filter movies

## Validation Rules

### Movie Form
- **Title**: Required, minimum 2 characters
- **Year**: Required, between 1950-2025
- **Genre**: Required
- **Duration**: Required, between 1-500 minutes
- **Rating**: Required, between 1-5
- **Image URL**: Required, must start with "http"
- **Description**: Required, minimum 6 characters

### Authentication Forms
- **Email**: Required, must contain "@"
- **Password**: Required, minimum 6 characters
- **Repeat Password**: Must match password (register only)

## Route Guards

- **Protected Routes** - Require authentication:
  - `/create`, `/movies/:id/edit`, `/myMovies`, `/favorites`, `/logout`
  
- **Guest Routes** - Only for non-authenticated users:
  - `/login`, `/register`

# Key Features Implementation

### Custom Hooks
- **useForm** - Form state management with validation, errors, and touched states
- **useValidation** - Field-level validators for movies and auth forms
- **useRequest** - HTTP requests with authentication headers
- **useMovieService** - CRUD operations, search, and filtering
- **useFavoriteService** - Favorites management

### Context API
- **AuthContext** - Global authentication state with login, register, logout handlers

### Component Patterns
- **Route Guards** - Outlet-based protection for routes
- **Two-Component Edit Pattern** - Edit.jsx + EditForm.jsx with key prop for re-initialization
- **Favorites System** - Toggle button with real-time state updates

## Author

**Zlatko Marianov Zlatev**
- GitHub: [@ZlatkoMarianov](https://github.com/ZlatkoMarianov)

## License

This project is created for educational purposes as part of the React.js course at SoftUni.

---

**Note**: This is a student project created for the SoftUni React.js final exam (December 2025).