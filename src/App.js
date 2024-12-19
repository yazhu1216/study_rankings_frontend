import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import { HomePage, LoginPage, RegisterPage, SearchPage, ComparePage, VerifyEmailPage } from './pages';
import Header from "./components/layout/Header";

import { AuthProvider } from './contexts/AuthContext';

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/compare" element={<ComparePage />} />
            <Route path="/verify-email" element={<VerifyEmailPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
