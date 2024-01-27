import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href={'/'}>
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex select-none pointer-events-none">
        <Image src={'/logo.svg'} alt="Logo" height={24} width={24} />
        <p className="text-md font-bold text-neutral-700 pt-1">Test-LP</p>
      </div>
      <div className="hover:opacity-75 transition block md:hidden">
        <Image src={'/logo.svg'} alt="Logo" height={24} width={24} />
      </div>
    </Link>
  );
};

export default Logo;
