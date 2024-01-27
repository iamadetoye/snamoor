import Image from 'next/image';
import Link from 'next/link';

import { FOOTER_LINKS } from '@/constants';
import { Button } from '@/components/ui/button';

interface FooterColumnProps {
  title: string;
  children: React.ReactNode;
}

const Footer = () => {
  return (
    <footer className="bg-whited relative">
      <div className="h-72" />
      <div className="h-72 absolute left-1/2 right-1/2 transform -translate-x-1/2 -translate-y-1/2 max-container padding-container items-center w-full">
        <div className="bg-green-1 rounded-[50px] w-full p-20 shadow-[0px_0px_200px_0px_#0000001e]">
          <div className="w-full flex justify-between">
            <div className="flex items-start flex-col space-y-8 text-white max-w-xl">
              <h3 className="font-poppins text-[40px] font-bold tracking-[5%] leading-[1.04]">Let's Get You Insured Now!</h3>
              <p className="regular-16 font-poppins">Lorem Ipsum but also the leap into electronic typesetting, remaining essentially unchanged</p>
            </div>
            <Button className="px-8 py-6 mt-8 rounded-xl bg-brand hover:bg-brand-dark font-notosans capitalize font-bold duration-300 transition-all" asChild>
              <Link href={'#'}>Get a Quote</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-green-2 pt-48 pb-24 text-white">
        <div className="max-container padding-container flex justify-between">
          <div className="flex flex-col gap-6">
            <div className="flex gap-2 items-center">
              <Image src={'/images/snamoor.jpg'} alt="" width={24} height={24} className="rounded-md" />
              <h6 className="font-bold uppercase">namoor</h6>
            </div>
            <p className="regular-16 text-white opacity-75 max-w-md">Some Copyright texts will go here in form of a short paragraph and would not take more than spacing it takes here. ©˚</p>
          </div>
          <ul className="grid gap-12 grid-cols-3">
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
