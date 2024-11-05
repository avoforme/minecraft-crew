import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/NavBar.jsx'
import CreateCrewmate from './components/createCrewmate.jsx'
import ReadCrewmate from './components/ReadCrewmate.jsx'
import EditCrewmate from './components/EditCrewmate.jsx'
import NotFound from './components/NotFound.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index={true} element={<App />} />

          <Route
            index={false}
            path="/create"
            element={<CreateCrewmate />}
          />
          <Route
            index={false}
            path="/edit"
            element={<EditCrewmate />}
          />
          <Route
            index={false}
            path="/read"
            element={<ReadCrewmate />}
          />
          
          <Route path="*" element={<NotFound />} />

        </Route>
        
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

