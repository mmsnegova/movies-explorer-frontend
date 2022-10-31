import './App.css';
import { Switch, Route } from "react-router-dom";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <Header /> {/* шапка */}
        <Navigation /> {/* навигация */}
        <Switch>
        <Route exact path="/">{/* О проекте */}
          <Main />
        </Route>
        <Route path="/movies">{/* Фильмы */}
          <Movies />
        </Route>
        <Route path="/saved-movies">{/* Сохранённые фильмы */}
          <SavedMovies />
        </Route>
        <Route path="/profile">{/* Аккаунт */}
          <Profile />
        </Route>
        <Route path="/signin">{/* Авторизация */}
          <Login />
        </Route>
        <Route path="/signup">{/* Регистрация */}
          <Register />
        </Route>
        </Switch>
        <Footer />{/* Подвал */}
      </div>
    </div>
  );
}

export default App;
