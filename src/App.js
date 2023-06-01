import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import ContextReducer from './contexts/index'
import MovieDetailPage from './pages/MovieDetailPage/MovieDetailPage';

function App() {





  return (
    <BrowserRouter>
      <ContextReducer>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/moviedetails/:movieId' element={<MovieDetailPage />} />
        </Routes>
      </ContextReducer>
    </BrowserRouter>
  );
}

export default App;
