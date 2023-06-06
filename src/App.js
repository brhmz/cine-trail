import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import ContextReducer from './contexts/index'
import MovieDetailPage from './pages/MovieDetailPage/MovieDetailPage';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import MyFavorites from './pages/MyFavorites/MyFavorites';

function App() {

  const serverUrl = process.env.REACT_APP_SERVER_URL;
  const apiKey = process.env.REACT_APP_API_KEY;

  return (
    <BrowserRouter>
      <ContextReducer>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage apiKey={apiKey} />} />
          <Route path='/moviedetails/:movieId' element={<MovieDetailPage apiKey={apiKey} />} />
          <Route path='/signup' element={<SignUp serverUrl={serverUrl} />} />
          <Route path='/signin' element={<SignIn serverUrl={serverUrl} />} />
          <Route path='/favoritemovies/user/:userid' element={<MyFavorites serverUrl={serverUrl} />} />
        </Routes>
      </ContextReducer>
    </BrowserRouter>
  );
}

export default App;
