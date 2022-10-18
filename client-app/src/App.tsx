import { Routes, Route } from "react-router-dom";
import { useTypedSelector } from "./hooks/useTypedSelector";
// Import components
import Login from "./pages/auth/login";
import DashboardLayout from "./containers/dashboardLayout";
import NotFound from "./pages/notFound";
import Users from "./pages/users";
import DefaultPage from "./pages/dafaultPage";

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
            </Route>
          )}
          {user.Role === "User" && (
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<DefaultPage />} />
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
