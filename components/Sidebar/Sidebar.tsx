import UpperNav from './nav/UpperNav';
import LowerNav from './nav/LowerNav';

function Sidebar() {
  return (
    <aside className="flex h-full w-64 flex-col items-center bg-white text-3xl text-black shadow-lg shadow-gray-300">
      <div className="flex h-full w-full flex-col gap-4 px-3">
        <nav className="mt-2 flex h-full w-full flex-col items-center justify-between">
          <UpperNav />
          <LowerNav />
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
