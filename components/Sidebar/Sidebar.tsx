import SidebarHeader from './SidebarHeader';
import UpperNav from './nav/UpperNav';
import LowerNav from './nav/LowerNav';

function Sidebar() {
  return (
    <aside className="flex h-full w-64 flex-col items-center rounded-lg bg-primary text-3xl text-black">
      <div className="flex h-full w-full flex-col gap-4 px-3 py-2">
        <SidebarHeader />

        <nav className="mt-2 flex h-full w-full flex-col items-center justify-between">
          <UpperNav />
          <LowerNav />
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
