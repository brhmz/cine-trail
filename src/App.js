import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import ContextReducer from './contexts/index'
import MovieDetailPage from './pages/MovieDetailPage/MovieDetailPage';
import SignUp from './pages/SignUp/SignUp';

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
        </Routes>
      </ContextReducer>
    </BrowserRouter>
  );
}

export default App;
