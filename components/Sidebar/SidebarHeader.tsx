import Image from 'next/image';

function SidebarHeader() {
  return (
    <section className="flex flex-col items-center">
      <Image
        src="./bsu-logo.svg"
        width={0}
        height={0}
        alt="logo"
        className="h-20 w-20"
      />

      <p className="text-lg text-white">Alumni System</p>
    </section>
  );
}

export default SidebarHeader;
