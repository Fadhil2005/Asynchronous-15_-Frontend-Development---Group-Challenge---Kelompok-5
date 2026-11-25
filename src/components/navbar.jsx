import { useState } from 'react';
import { userAvatar } from '../data/berandaData';
import logoRecyclo from '../assets/logo-recyclo.png';

const menus = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Peta', href: '#peta' },
  { label: 'Poin', href: '#poin' },
  { label: 'Riwayat', href: '#riwayat' },
];

export default function Navbar({ userName, accountType }) {
  const [active, setActive] = useState('Beranda');

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#beranda" aria-label="Recyclo Beranda">
          <img src={logoRecyclo} alt="Recyclo" />
        </a>
        <nav className="main-nav" aria-label="Navigasi utama">
          {menus.map((menu) => (
            <a
              key={menu.label}
              href={menu.href}
              className={active === menu.label ? 'nav-link active' : 'nav-link'}
              onClick={() => setActive(menu.label)}
            >
              {menu.label}
            </a>
          ))}
        </nav>
        <div className="user-profile">
          <img src={userAvatar} alt="" />
          <div>
            <p>{userName}</p>
            <span>{accountType}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
