import s from "./SideBar.module.css";
import { Link } from "react-router-dom";

export default function SideBar({ component }) {
  return (
    <div className={s.container}>
      <section className={s.app}>
        <aside className={s.sidebar}>
          <div className={s.header}>
            <Link id={s.menu} to="/admin">
              Menu
            </Link>
          </div>
          <nav className={s.sidebarNav}>
            <ul>
              <li>
                <Link to="/admin/packs">
                  <i className={s.ionBag}></i> <span>Packs</span>
                </Link>
              </li>
              <li>
                <Link to="/admin/users">
                  <i className={s.ionBag}></i> <span>Users</span>
                </Link>
              </li>
              <li>
                <Link to="/admin/hotels">
                  <i className={s.ionBag}></i> <span>Hotels</span>
                </Link>
              </li>
              <li>
                <Link to="/admin/sells">
                  <i className={s.ionBag}></i> <span>Sells</span>
                </Link>
              </li>
              <li>
                <Link to="/admin/activities">
                  <i className={s.ionBag}></i> <span>Activities</span>
                </Link>
              </li>
              <li>
                <Link to="/admin/destinations">
                  <i className={s.ionBag}></i> <span>Destinations</span>
                </Link>
              </li>
            </ul>
          </nav>
        </aside>
      </section>
      <div className={s.component}>{component}</div>
    </div>
  );
}
