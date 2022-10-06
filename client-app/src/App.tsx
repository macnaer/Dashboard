import { Routes, Route } from "react-router-dom";
// Import components
import Login from "./pages/auth/login";
import Dashboard from "./pages/dashboard";
import NotFound from "./pages/notFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
