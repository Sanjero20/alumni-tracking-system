import SideNavLink from '../SideNavLink';
import BtnLogout from '../../Buttons/BtnLogout';
import { RiSettings3Fill, RiLogoutCircleLine } from 'react-icons/ri';

function LowerNav() {
  return (
    <ul className="flex w-full flex-col gap-1">
      <SideNavLink href="/admin/settings">
        <RiSettings3Fill /> <p className="text-lg">Settings</p>
      </SideNavLink>

      <BtnLogout className="m-2 flex items-center gap-2 text-white">
        <RiLogoutCircleLine />
        <p className="text-lg">Logout</p>
      </BtnLogout>
    </ul>
  );
}

export default LowerNav;
