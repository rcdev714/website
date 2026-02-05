import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import MarkdownPage from './components/MarkdownPage';

// Import markdown content via Vite's raw loader
import privacyMd from '@/assets/docs/privacy.md?raw';
import termsMd from '@/assets/docs/terms.md?raw';
import supportMd from '@/assets/docs/support.md?raw';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route 
          path="privacy" 
          element={<MarkdownPage title="Privacy Policy" content={privacyMd} />} 
        />
        <Route 
          path="terms" 
          element={<MarkdownPage title="Terms of Service" content={termsMd} />} 
        />
        <Route 
          path="support" 
          element={<MarkdownPage title="Support" content={supportMd} />} 
        />
      </Route>
    </Routes>
  );
}

export default App;
