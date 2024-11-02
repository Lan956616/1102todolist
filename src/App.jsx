import './App.scss';
import { HomePage, TodoPage, LoginPage, SignUpPage } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from 'contexts/AuthContext';

const BASENAME = process.env.PUBLIC_URL;

function App() {
  return (
    <div className="app">
      <BrowserRouter basename={BASENAME}>
        <AuthProvider>
          <Routes>
            <Route path="login" element={<LoginPage />} />
            <Route path="todo" element={<TodoPage />} />
            <Route path="signup" element={<SignUpPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
