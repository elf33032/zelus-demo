import AddNewProperty from "./Pages/AddNewProperty";
import ManageProperty from "./Pages/ManageProperty";
import Layout from "./UI/Layout";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
      <Layout>
          <Routes>
              <Route path = '/' element = {<AddNewProperty/>}/>
              <Route path = '/managing-property' element = {<ManageProperty/>}/>
          </Routes>
      </Layout>
  );
}

export default App;
