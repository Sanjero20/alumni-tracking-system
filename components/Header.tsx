import Image from 'next/image';

type Props = {
  title?: string;
};

function Header({ title = 'Batangas State University' }: Props) {
  return (
    <header className="h-20 bg-primary text-white">
      <div className="container m-auto flex h-full items-center gap-2 p-2 lg:p-0">
        <Image
          src={'/bsu-logo.svg'}
          width={64}
          height={64}
          alt="bsu-logo"
          className="h-16 w-16"
        />
        <h1 className="text-lg font-bold lg:text-xl">{title}</h1>
      </div>
    </header>
  );
}

export default Header;
