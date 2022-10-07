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
                <a href="#">
                  <i className={s.ionBag}></i> <span>Packs</span>
                </a>
                <ul className={s.navFlyout}>
                  <li>
                    <Link to="/admin/packs">
                      <i></i>All
                    </Link>
                  </li>
                  <li>
                    <Link to="/admin/packs/create">
                      <i></i>Create
                    </Link>
                  </li>
                  <li>
                    <Link to="/admin/packs/edit">
                      <i></i>Edit
                    </Link>
                  </li>
                  <li>
                    <Link to="/admin/packs/delete">
                      <i></i>Delete
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  <i></i>
                  <span className="">Hotels</span>
                </a>
                <ul className={s.navFlyout}>
                  <li>
                    <Link to="/hotels/packs">
                      <i></i>All
                    </Link>
                  </li>
                  <li>
                    <Link to="/admin/hotels/create">
                      <i></i>Create
                    </Link>
                  </li>
                  <li>
                    <Link to="/admin/hotels/edit">
                      <i></i>Edit
                    </Link>
                  </li>
                  <li>
                    <Link to="/admin/hotels/delete">
                      <i></i>Delete
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  <i className=""></i>
                  <span className="">Folio</span>
                </a>
                <ul className={s.navFlyout}>
                  <li>
                    <a href="#">
                      <i className=""></i>Burn
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className=""></i>Bulbs
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className=""></i>Where You
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className=""></i>On Lock
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className=""></i>Ghostface
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  <i className=""></i>
                  <span className="">Graphicals</span>
                </a>
                <ul className={s.navFlyout}>
                  <li>
                    <a href="#">
                      <i className="ion-ios-timer-outline"></i>Timers
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ion-arrow-graph-down-left"></i>You Lose
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ion-ios-partlysunny-outline"></i>Stormy
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ion-ios-timer-outline"></i>Lookie Look
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ion-ios-game-controller-a-outline"></i>Dork
                      Mfer
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  <i className="ion-ios-paper-outline"></i>
                  <span className="">Papers</span>
                </a>
                <ul className={s.navFlyout}>
                  <li>
                    <a href="#">
                      <i className="ion-ios-filing-outline"></i>File Cab
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ion-ios-information-outline"></i>Infos
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ion-ios-paperplane-outline"></i>Planes
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ion-android-star-outline"></i>Shop
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  <i className="ion-ios-navigate-outline"></i>{" "}
                  <span className="">Ass Finder</span>
                </a>
                <ul className={s.navFlyout}>
                  <li>
                    <a href="#">
                      <i className="ion-ios-flame-outline"></i>Burn
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ion-ios-lightbulb-outline"></i>Bulbs
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ion-ios-location-outline"></i>Where You
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ion-ios-locked-outline"></i>On Lock
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ion-ios-navigate-outline"></i>Ghostface
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  <i className="ion-ios-medical-outline"></i>{" "}
                  <span className="">Cocaine</span>
                </a>
              </li>
            </ul>
          </nav>
        </aside>
      </section>
      <div className={s.component}>{component}</div>
    </div>
  );
}
