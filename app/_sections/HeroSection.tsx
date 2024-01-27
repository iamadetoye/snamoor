import { Button } from '@/components/ui/button';
import { FEATUREDUSERSIMAGES } from '@/constants';
import { ChevronRightIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="overflow-x-clip">
      <div className="max-container padding-container">
        <div className="w-full md:w-3/5 pt-12">
          <Button asChild variant={'ghost'} className="rounded-full px-[6px] bg-neutral-50 text-[16px] font-poppins">
            <Link href={'/'} className="flex gap-4 items-start">
              <span className="bg-brand text-white px-2 py-1 rounded-full">New</span>
              <span className="text-secondary-text">2022 Q2 Report</span>
              <span className="p-1 ml-2 rounded-full">
                <ChevronRightIcon />
              </span>
            </Link>
          </Button>
          <h1 className="text-[92px] font-black tracking-tighter leading-[1.087] text-primary-text mt-6 mb-4 text-start">Global Insurance Market Index</h1>
          <p className="text-[16px] font-light text-tertiary-text text-start w-full max-w-[600px] mb-10 tracking-wide leading-snug">The Global Insurance Market Index is our proprietary measure of global commercial insurance premium pricing change at renewal, providing insights on the world's major insurance markets.</p>
          <Button className="px-8 py-6 rounded-xl bg-brand hover:bg-brand-dark font-notosans capitalize font-bold duration-300 transition-all">Learn more</Button>
          <div className="py-8 mt-16 flex items-center space-x-5">
            <ul className="flex items-center -space-x-5">
              {FEATUREDUSERSIMAGES.map((image) => (
                <li className="relative w-[60px] h-[60px] border-2 border-white rounded-full overflow-hidden" key={image}>
                  <Image src={image} alt={''} fill className="object-cover select-none" />
                </li>
              ))}
            </ul>
            <div className="font-poppins flex flex-col items-start space-y-1">
              <h4 className="text-lg tracking-tight text-green-1 font-bold">98k</h4>
              <span className="text-tertiary-text font-light">Insured Persons</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

// border-radius: 300px 0px 0px 0px;
// background: linear-gradient(229deg, #B8E8EC 0%, #F8F8F8 100%);
