import Image from 'next/image';

function Illustration() {
  return (
    <>
      <Image
        src="/bsu-logo.svg"
        alt="alumni-logo"
        className="mx-auto w-1/2 md:w-1/3"
        priority={true}
        width={0}
        height={0}
      />

      <h1 className=" text-center text-3xl font-bold text-red-600 md:text-5xl md:text-white">
        Alumni Portal
      </h1>
    </>
  );
}

export default Illustration;
