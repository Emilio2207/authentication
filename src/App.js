import { UserAuth } from "./context/AuthContext";
import logo from "./logo.svg";
import NonUserRoutes from "./routes/NonUserRoutes";
import UserRoutes from "./routes/UserRoutes";

function App() {
  const { isLoggetOut } = UserAuth();
  return <div>{isLoggetOut ? <NonUserRoutes /> : <UserRoutes />}</div>;
}

export default App;
