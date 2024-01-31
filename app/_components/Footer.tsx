import Image from 'next/image';
import Link from 'next/link';

import { FOOTER_LINKS } from '@/constants';
import { Button } from '@/components/ui/button';


const Footer = () => {
  return (
    <footer className="relative">
      <div className="h-72" />
      <div className="h-72 absolute left-1/2 right-1/2 transform -translate-x-1/2 -translate-y-1/2 max-container padding-container items-center w-full">
        <div className="bg-green-1 rounded-[50px] w-full p-10 md:p-20 shadow-[0px_0px_200px_0px_#0000001e]">
          <div className="w-full flex flex-col md:flex-row gap-8 md:gap-10 justify-between ">
            <div className="flex items-start md:items-start flex-col gap-8 text-white max-w-xl">
              <h3 className="font-poppins bold-20 sm:bold-32 md:bold-40 text-start">Let's Get You Insured Now!</h3>
              <p className="text-start regular-14 md:regular-16 font-poppins">Lorem Ipsum but also the leap into electronic typesetting, remaining essentially unchanged</p>
            </div>
            <Button className="px-8 py-6 self-stretch xs:self-start md:self-center rounded-xl bg-brand hover:bg-brand-dark font-notosans capitalize font-bold duration-300 transition-all" asChild>
              <Link href={'#'}>Get a Quote</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-green-2 pt-56 xs:pt-48 sm:pt-56 md:pt-64 pb-24 text-white">
        <div className="max-container padding-container grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col gap-6">
            <div className="flex gap-2 items-center">
              <Image src={'/images/snamoor.jpg'} alt="" width={24} height={24} className="rounded-md" />
              <h6 className="font-bold uppercase">namoor</h6>
            </div>
            <p className="regular-16 text-white opacity-75 max-w-md">Some Copyright texts will go here in form of a short paragraph and would not take more than spacing it takes here. ©˚</p>
          </div>
          <ul className="grid gap-12  grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
            {FOOTER_LINKS.map((footer_link) => (
              <li className="flex flex-col gap-4" key={footer_link.title}>
                <h5 className="font-poppins font-semibold text-[16px]">{footer_link.title}</h5>
                <ul className="flex flex-col gap-2">
                  {footer_link.links.map((link) => (
                    <li className="text-white/75" key={link.label}>
                      <Link href={link.val}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
