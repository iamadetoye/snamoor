import { Button } from '@/components/ui/button';
import { NAV_LINKS } from '@/constants';
import Link from 'next/link';
import { AlignRightIcon } from 'lucide-react';
import Image from 'next/image';
import Sidebar from './Sidebar';

interface NavbarProps {}

const Navbar = ({}: NavbarProps) => {
  return (
    <nav className="flexBetween max-container padding-container top-0 z-30 py-5 sticky bg-white">
      <div className="flex items-center space-x-2">
        <Image src={'/images/snamoor.jpg'} alt="" width={20} height={20} className="aspect-square w-6 h-6 rounded-sm" />
        <span className="bold-16 font-notosans text-lg uppercase">namoor</span>
      </div>
      <div className="flex gap-16 items-center">
        <ul className="hidden h-full gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link href={link.href} className="text-[16px] font-light text-secondary-text flexCenter cursor-pointer pb-1.5 transition-all hover:text-brand-dark" key={link.key}>
              {link.label}
            </Link>
          ))}
        </ul>
        <div className="hidden lg:flexCenter">
          <Button variant={'default'} aria-label="menu" role="button" asChild className="rounded-full bg-brand hover:bg-brand-dark transition-all duration-300">
            <Link href={'#contact'}>Contact us</Link>
          </Button>
        </div>
        <div className="block lg:hidden ">
          <Sidebar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
