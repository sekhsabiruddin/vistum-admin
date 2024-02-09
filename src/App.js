import Home from "./Home/Home";
import { UserProvider } from "./context/contextUser";
function App() {
  return (
    <UserProvider>
      <Home />
    </UserProvider>
  );
}

export default App;
