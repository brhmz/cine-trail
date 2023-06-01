import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import ContextReducer from './contexts/index'
import MovieDetailPage from './pages/MovieDetailPage/MovieDetailPage';
import SignUp from './pages/SignUp/SignUp';

function App() {





  return (
    <BrowserRouter>
      <ContextReducer>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/moviedetails/:movieId' element={<MovieDetailPage />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </ContextReducer>
    </BrowserRouter>
  );
}

export default App;
