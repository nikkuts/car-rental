import { Suspense } from "react";
import { NavLink, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';

export const SharedLayout = () => {

  return (
    <div className={css.container}>
        <header className={css.header}>
            <nav>
                <NavLink className={css.link} to="/">
                Home
                </NavLink>
                <NavLink className={css.link} to="/catalog">
                Catalog
                </NavLink>
                <NavLink className={css.link} to="/favorites">
                Favorites
                </NavLink>
            </nav>
        </header>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
    </div>
  );
};