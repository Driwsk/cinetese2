'use client'
import { NavigationToHome, NavigationToLogin, NavigationToCatalogo } from '@/routes/route';




export default function NavBar() {

    return (
        <>
            <div className="navbar bg-base-100">
  <div className="flex-1">
    <button className="btn btn-ghost text-xl" type="button" onClick={NavigationToHome}>Home</button>
  </div>
  <div className="flex-1">
    <button className="btn btn-ghost text-xl" type="button" onClick={NavigationToLogin}>Login</button>
  </div>
  <div className="flex-1">
    <button className="btn btn-ghost text-xl" type="button" onClick={NavigationToCatalogo}>Catalogo</button>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Perfil
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Favoritos</a></li>
        <li><a>Sair</a></li>
      </ul>
    </div>
  </div>
</div>
        </>
    );
}