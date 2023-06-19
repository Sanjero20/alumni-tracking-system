import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

type LinkProps = {
  href: string;
  children: ReactNode;
};

function SideNavLink({ href, children }: LinkProps) {
  const { asPath } = useRouter();
  const isActive = asPath === href;

  const generalStyle = 'p-1';
  const activeStyle = 'bg-white text-primary rounded';
  const inactiveStyle = '';

  const linkStyle = isActive ? activeStyle : inactiveStyle;

  return (
    <Link href={href} className={`${generalStyle} ${linkStyle}`}>
      {children}
    </Link>
  );
}

export default SideNavLink;
