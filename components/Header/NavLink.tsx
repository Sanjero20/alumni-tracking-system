import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

type LinkProps = {
  href: string;
  children: ReactNode;
};

function NavLink({ href, children }: LinkProps) {
  const { asPath } = useRouter();
  const isActive = asPath === href;

  const activeStyle = 'underline';
  const inactiveStyle = '';

  const linkStyle = isActive ? activeStyle : inactiveStyle;

  return (
    <Link href={href} className={linkStyle}>
      {children}
    </Link>
  );
}

export default NavLink;
