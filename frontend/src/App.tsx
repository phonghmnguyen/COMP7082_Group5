import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from '@/pages/Landing';
import Questionnaire from './pages/Questionnaire';
import Routine from './pages/Routine';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
        <Route path="/routine" element={<Routine />} />
      </Routes>
    </Router>
  )
}

export default App
