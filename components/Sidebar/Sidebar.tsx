import { ReactElement } from 'react';
import SideNavLink from './SideNavLink';
import { MdDashboard, MdAccountCircle } from 'react-icons/md';
import { FaUserGraduate, FaSchool } from 'react-icons/fa';

import { RiSettings3Fill, RiLogoutCircleLine } from 'react-icons/ri';

type RouteType = {
  route: string;
  path: string;
  icon: ReactElement;
};

const links: RouteType[] = [
  {
    route: '',
    path: 'Dashboard',
    icon: <MdDashboard />,
  },
  {
    route: '/alumnus',
    path: 'Alumnus',
    icon: <FaUserGraduate />,
  },
  {
    route: '/campuses',
    path: 'Campuses',
    icon: <FaSchool />,
  },
];

function Sidebar() {
  return (
    <aside className="flex h-full w-48 flex-col items-center bg-white text-4xl text-black shadow-lg shadow-gray-300">
      <div className="flex h-full w-full flex-col gap-4 px-3">
        {/* Profile  */}
        <section></section>

        <nav className="flex h-full w-full flex-col items-center justify-between">
          <ul className="flex w-full flex-col gap-1">
            {/* Map SideNavLink */}
            {links.map((link, index) => (
              <SideNavLink href={`/admin${link.route}`} key={index}>
                {link.icon} <p className="text-lg font-bold">{link.path}</p>
              </SideNavLink>
            ))}
          </ul>

          <ul className="flex w-full flex-col gap-1">
            <SideNavLink href="/admin/settings">
              <RiSettings3Fill /> <p className="text-lg font-bold">Settings</p>
            </SideNavLink>

            <button className="m-2 flex items-center gap-2">
              <RiLogoutCircleLine />
              <p className="text-lg font-bold">Logout</p>
            </button>
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
