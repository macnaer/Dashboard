import { Routes, Route } from "react-router-dom";
import { useTypedSelector } from "./hooks/useTypedSelector";
// Import components
import Login from "./pages/auth/login";
import DashboardLayout from "./containers/dashboardLayout";
import NotFound from "./pages/notFound";
import Users from "./pages/users";
import DefaultPage from "./pages/dafaultPage";
import Register from "./pages/auth/register";
import Profile from "./pages/auth/profile";

const App: React.FC = () => {
  const { isAuth, user } = useTypedSelector((store) => store.UserReducer);

  return (
    <Routes>
      {isAuth && (
        <>
          {user.Role === "Administrator" && (
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<DefaultPage />} />
              <Route path="users" element={<Users />} />
              <Route path="register" element={<Register />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          )}
          {user.Role === "User" && (
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<DefaultPage />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          )}
        </>
      )}
      <Route path="/" element={<Login />} />
      <Route path="/dashboard/*" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
