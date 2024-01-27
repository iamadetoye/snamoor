import { Button } from '@/components/ui/button';
import { NAV_LINKS } from '@/constants';
import Link from 'next/link';
import { AlignCenterIcon } from 'lucide-react';
import Image from 'next/image';

interface NavbarProps {}

const Navbar = ({}: NavbarProps) => {
  return (
    <nav className="flexBetween max-container padding-container top-0 z-30 py-5 sticky bg-white">
      <div className="flex items-center space-x-2">
        <Image src={'/images/snamoor.jpg'} alt="" width={20} height={20} className="aspect-square w-6 h-6 rounded-sm" />
        <h5 className="font-bold text-lg uppercase">namoor</h5>
      </div>
      <div className="flex gap-16 items-center">
        <ul className="hidden h-full gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link href={link.href} className="text-[16px] font-light text-tertiary-text flexCenter cursor-pointer pb-1.5 transition-all hover:text-brand-dark" key={link.key}>
              {link.label}
            </Link>
          ))}
        </ul>
        <div className="hidden lg:flexCenter">
          <Button variant={'default'} asChild className="rounded-full bg-brand hover:bg-brand-dark transition-all duration-300">
            <Link href={'#contact'}>Contact us</Link>
          </Button>
        </div>
        <div className="flex p-2 items-center justify-center lg:hidden">
          <AlignCenterIcon />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
