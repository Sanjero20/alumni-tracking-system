import Image from 'next/image';

type Props = {
  title?: string;
};

function Header({ title = 'Batangas State University' }: Props) {
  return (
    <header className="h-20 bg-primary text-white">
      <div className="container m-auto flex h-full items-center gap-2 p-2 lg:p-0">
        <Image src={'/bsu-logo.svg'} width={60} height={60} alt="bsu-logo" />
        <h1 className="text-lg font-bold lg:text-xl">{title}</h1>
      </div>
    </header>
  );
}

export default Header;
