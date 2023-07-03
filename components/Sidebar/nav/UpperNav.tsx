import { ReactElement } from 'react';
import SideNavLink from '../SideNavLink';

import { MdDashboard } from 'react-icons/md';
import { FaUserGraduate, FaSchool, FaRegListAlt } from 'react-icons/fa';

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
    route: '/applications',
    path: 'Applications',
    icon: <FaRegListAlt />,
  },
  {
    route: '/campuses',
    path: 'Campuses',
    icon: <FaSchool />,
  },
];

function UpperNav() {
  return (
    <ul className="flex w-full flex-col gap-1">
      {/* Map SideNavLink */}
      {links.map((link, index) => (
        <SideNavLink href={`/admin${link.route}`} key={index}>
          {link.icon} <p className="text-lg">{link.path}</p>
        </SideNavLink>
      ))}
    </ul>
  );
}

export default UpperNav;
