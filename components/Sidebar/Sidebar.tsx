import { ReactElement } from 'react';
import SideNavLink from './SideNavLink';
import { MdDashboard, MdAccountCircle } from 'react-icons/md';
import { FaUserGraduate, FaSchool } from 'react-icons/fa';

import { RiSettings3Fill, RiLogoutCircleLine } from 'react-icons/ri';

type RouteType = {
  route: string;
  icon: ReactElement;
};

const links: RouteType[] = [
  { route: '', icon: <MdDashboard /> },
  { route: '/alumnus', icon: <FaUserGraduate /> },
  { route: '/campuses', icon: <FaSchool /> },
];

function Sidebar() {
  return (
    <aside className="flex h-full w-16 flex-col items-center bg-primary text-4xl text-white">
      <section className="flex h-full flex-col gap-4 py-4">
        <MdAccountCircle className="text-5xl" />

        <nav className="flex h-full w-full flex-col items-center justify-between">
          <ul className="flex flex-col gap-3">
            {/* Map SideNavLink */}
            {links.map((link, index) => (
              <SideNavLink href={`/admin${link.route}`} key={index}>
                {link.icon}
              </SideNavLink>
            ))}
          </ul>

          <ul className="flex flex-col gap-3">
            <SideNavLink href="/admin/settings">
              <RiSettings3Fill />
            </SideNavLink>

            <li className="p-1">
              <button>
                <RiLogoutCircleLine />
              </button>
            </li>
          </ul>
        </nav>
      </section>
    </aside>
  );
}

export default Sidebar;
