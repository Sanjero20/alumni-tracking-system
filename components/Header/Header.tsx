import Image from 'next/image';
import NavLink from './NavLink';

type Props = {
  title?: string;
  hiddenMenu?: boolean;
};

function Header({
  title = 'Batangas State University',
  hiddenMenu = false,
}: Props) {
  return (
    <header className="h-20 bg-primary text-white">
      <div className="container m-auto flex h-full items-center justify-between p-2 lg:p-0">
        <div className="flex items-center gap-2">
          <Image
            src={'/bsu-logo.svg'}
            width="0"
            height="0"
            alt="bsu-logo"
            className="h-14 w-auto"
          />
          <h1 className="text-lg font-bold lg:text-xl">{title}</h1>
        </div>

        {!hiddenMenu && (
          <nav className="hidden md:block">
            <ul className="flex gap-4 text-lg font-bold">
              <NavLink href="/">HOME</NavLink>
              <NavLink href="/events">EVENTS</NavLink>
              <NavLink href="/about">ABOUT</NavLink>
              <NavLink href="/profile">PROFILE</NavLink>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
