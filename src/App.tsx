import { Route, Routes } from 'react-router-dom';
import { AboutPage, HomePage, LoginPage, Navbar } from './components';

export const App = () => {
  return (
    <>
      <h1>Main App</h1>
      <Navbar />
      <hr />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='login' element={<LoginPage />} />
      </Routes>
    </>
  );
};
