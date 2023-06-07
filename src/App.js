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

  return (
    <BrowserRouter>
      <ContextReducer>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/moviedetails/:movieId' element={<MovieDetailPage serverUrl={serverUrl} />} />
          <Route path='/signup' element={<SignUp serverUrl={serverUrl} />} />
          <Route path='/signin' element={<SignIn serverUrl={serverUrl} />} />
          <Route path='/myfavorites' element={<MyFavorites serverUrl={serverUrl} />} />
        </Routes>
      </ContextReducer>
    </BrowserRouter>
  );
}

export default App;
