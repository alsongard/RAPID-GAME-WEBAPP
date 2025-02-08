# 🎮 Free Games Hub

Free Games Hub is a React-based website that fetches data from the [RapidAPI Free Games API](https://rapidapi.com/) and provides an interactive UI to explore free games. The website supports dynamic pages for detailed game views, a dark mode feature, and filtering games by platform (PC or Web Browser).

## 🚀 Features

- 📡 Fetches free game data from the RapidAPI Free Games API.
- 🔍 Filters games on the **GAMES** page based on platform (PC or Web Browser).
- 🌑 Dark mode toggle for a better user experience.
- 📄 Dynamic routing for detailed game views.
- 📱 Fully responsive design.

## 🛠️ Technologies Used

- **React.js** - Frontend framework
- **React Router** - For dynamic routing
- **Tailwind CSS** - Styling framework
- **RapidAPI** - API provider for game data
- **Context API / useState** - For state management

## 📂 Project Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/free-games-hub.git
   cd free-games-hub
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your RapidAPI key:
   ```env
   REACT_APP_RAPIDAPI_KEY=your_api_key_here
   ```

4. Start the development server:
   ```bash
   npm start
   ```

## 📌 API Integration

To fetch games, the application makes a request to the RapidAPI Free Games API:
```javascript
fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
})
.then(response => response.json())
.then(data => setGames(data))
.catch(error => console.error(error));
```

## 🕹️ Filtering Games by Platform

The **GAMES** page includes a filter to display games for either **PC** or **Web Browser**:
```javascript
const filteredGames = games.filter(game => game.platform.includes(selectedPlatform));
```

## 🎨 Dark Mode Feature

Dark mode is implemented using **useState** and **localStorage**:
```javascript
const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true');

useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    document.body.classList.toggle('dark', darkMode);
}, [darkMode]);
```

## 🛠️ Available Scripts

- `npm start` - Runs the development server.
- `npm run build` - Builds the app for production.

## 📜 License

This project is licensed under the MIT License.

---

🚀 **Enjoy exploring free games!** 🎮

