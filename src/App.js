import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";
import Excursiones from "./pages/Excursiones/Excursiones";
import "bootstrap/dist/css/bootstrap.min.css";
import Destinations from "./pages/Destinations/Destinations";
import PageUser from "./pages/PageUser/PageUser";
import InfoCard from "./pages/InfoCard/InfoCard";
import PageHotel from "./pages/Packs/Hotel";
import Hotels from "./pages/Hotels/Hotels.jsx";
import Legales from "./pages/Legales/Legales";
import PagePack from "./pages/Page-pack/PagePack";
import CheckOut from "./pages/checkout/CheckOut";
import SideBar from "./admin/SideBar/SideBar";
import MenuAdmin from "./admin/components/Menu/MenuAdmin.jsx";
import PacksAdmin from "./admin/components/Packs/PacksAdmin";
import HotelsAdmin from "./admin/components/Hotels/HotelsAdmin";
import UsersAdmin from "./admin/components/Users/UsersAdmin";
import DestinationsAdmin from "./admin/components/Destinations/DestinationsAdmin";
import SellsAdmin from "./admin/components/Sells/SellsAdmin";
import ActivitiesAdmin from "./admin/components/Activities/ActivitiesAdmin";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/excursiones" element={<Excursiones />} />
        <Route path="/detail/:id" element={<InfoCard />} />
        <Route path="/user" element={<PageUser />} />
        <Route path="/page-hotel" element={<PageHotel />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/legales" element={<Legales />} />
        <Route path="/page-pack" element={<PagePack />} />
        <Route path="/checkout" element={<CheckOut />} />
        {/* ---------------------ADMIN ROUTES------------------- */}
        <Route path="/admin" element={<SideBar component={<MenuAdmin />} />} />
        <Route
          path="/admin/packs"
          element={<SideBar component={<PacksAdmin />} />}
        />{" "}
        <Route
          path="/admin/users"
          element={<SideBar component={<UsersAdmin />} />}
        />
        <Route
          path="/admin/hotels"
          element={<SideBar component={<HotelsAdmin />} />}
        />
        <Route
          path="/admin/sells"
          element={<SideBar component={<SellsAdmin />} />}
        />
        <Route
          path="/admin/destinations"
          element={<SideBar component={<DestinationsAdmin />} />}
        />
        <Route
          path="/admin/activities"
          element={<SideBar component={<ActivitiesAdmin />} />}
        />
      </Routes>
    </div>
  );
}

export default App;
