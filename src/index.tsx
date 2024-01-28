import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecipesPage from './pages/recipes';
import reportWebVitals from './reportWebVitals';
import { font } from './styles/font';
import { Global } from '@emotion/react';

export default function App() {
  return (
    <BrowserRouter>
      <Global styles={font} />
      <Routes>
        <Route path="/" element={<RecipesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(<App />);

reportWebVitals();
