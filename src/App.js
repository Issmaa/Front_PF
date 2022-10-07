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
import PackCreate from "./admin/components/Packs/PackCreate/PackCreate";
import Menu from "./admin/components/Menu/Menu";
import PackEdit from "./admin/components/Packs/PackEdit/PackEdit";
import AllPacks from "./admin/components/Packs/AllPacks/AllPacks";
import DeletePack from "./admin/components/Packs/DeletePack/DeletePack";

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
        <Route path="/admin" element={<SideBar component={<Menu />} />} />
        <Route
          path="/admin/packs/create"
          element={<SideBar component={<PackCreate />} />}
        />{" "}
        <Route
          path="/admin/packs/edit"
          element={<SideBar component={<PackEdit />} />}
        />
        <Route
          path="/admin/packs"
          element={<SideBar component={<AllPacks />} />}
        />
        <Route
          path="/admin/packs/delete"
          element={<SideBar component={<DeletePack />} />}
        />
      </Routes>
    </div>
  );
}

export default App;
