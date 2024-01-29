import { Button } from '@/components/ui/button';
import { SERVICES } from '@/constants';
import { MoveRightIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const ServicesSection = () => {
  return (
    <section className="py-12" id="services">
      <div className="max-container padding-container flex flex-col md:flex-row space-y-12 items-center space-x-12">
        <div className="w-full max-w-3xl md:w-2/5 mx-amuto flex flex-col items-center md:items-start space-y-4">
          <p className="text-secondary-text text-[16px] font-notosans font-medium">Our Services</p>
          <h2 className="bold-40 text-center md:text-start tracking-wider">Services We Provide for You</h2>
          <p className="regular-16 text-tertiary-text text-center md:text-start max-w-xl">We bring an unmatched combination of industry specific expertise, deep intellectual capital, and global experience to the range of risks you face.</p>
          <div className="">
            <Button className="px-8 py-6 mt-8 rounded-xl bg-brand hover:bg-brand-dark font-notosans capitalize font-bold duration-300 transition-all" asChild>
              <Link href={'#'}>Learn more</Link>
            </Button>
          </div>
        </div>
        <div className="w-full md:w-3/5 grid grid-cols-2 gap-4">
          {SERVICES.map((service, i) => (
            <div className="bg-white rounded-3xl p-6 flex flex-col gap-5 drop-shadow-2fxl shadow-[0px_0px_200px_0px_#0000001e] hover:z-10 transition-all duration-300" key={i}>
              <figure className="bg-[#222540] w-16 h-16 rounded-full flex items-center justify-center">
                <Image src={service.icon} alt="family" width={24} height={24} className="w-7 h-7 aspect-square" />
              </figure>
              <h5 className="font-poppins text-[24px] font-semibold">{service.title}</h5>
              <p className="text-secondary-text regular-16">{service.desc}</p>

              <Button asChild variant={'ghost'} className="self-start p-1 hover:bg-transparent transition-all duration-300">
                <Link href={service.link} className="flex items-center text-brand hover:text-brand-dark group">
                  <p className="font-semibold text-[16px]">Choose plan</p>
                  <MoveRightIcon className="ml-2 group-hover:ml-4 transition-all duration-300" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
