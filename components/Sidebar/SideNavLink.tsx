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

  const generalStyle = 'p-2 w-full flex gap-2 items-center';
  const activeStyle = 'bg-white text-black rounded';
  const inactiveStyle = 'text-white';

  const linkStyle = isActive ? activeStyle : inactiveStyle;

  return (
    <Link href={href} className={`${generalStyle} ${linkStyle}`}>
      {children}
    </Link>
  );
}

export default SideNavLink;
