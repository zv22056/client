import {createBrowserRouter, RouterProvider, createRoutesFromElements, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import BuildingPage from "./pages/Building";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import BuildingDetailPage from "./pages/BuildingDetail";


const routeDefinitions = createRoutesFromElements(
    <Route>
      <Route
          path ="/"
          element={<RootLayout/>}
          errorElement= {<ErrorPage/>}
      >
      <Route index="true" element ={<HomePage/>} />
      <Route path ="building" element ={<BuildingPage/>}/>
      <Route path="building/:buildingId" element={<BuildingDetailPage/>}/>
      </Route>


    </Route>
);

const router = createBrowserRouter(routeDefinitions);
function App() {
  return <RouterProvider router={router}/>;
}

export default App;
