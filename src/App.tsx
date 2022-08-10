import ManageProperty from "./Pages/ManageProperty";
import NewProperty from "./Pages/NewProperty";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";

function App() {
  return (
    <Routes>
      <Route path="new-property" element={<NewProperty />} />
      <Route path="login" element={<Login />} />
      <Route path="managing-property/*" element={<ManageProperty />} />
    </Routes>
  );
}

export default App;
