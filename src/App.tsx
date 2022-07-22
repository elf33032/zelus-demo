import AddNewProperty from "./Pages/AddNewProperty";
import ManageProperty from "./Pages/ManageProperty";
import Layout from "./UI/Layout";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="new-property" element={<AddNewProperty />} />
        <Route path="/" element={<Login />} />
        <Route path="managing-property/*" element={<ManageProperty />} />
      </Routes>
    </Layout>
  );
}

export default App;
