import { Button } from '@/components/ui/button';
import { FEATUREDUSERSIMAGES } from '@/constants';
import { ChevronRightIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="overflow-x-clip">
      <div className="max-container padding-container md:pr-0 md:padleft-container flex flex-col md:flex-row">
        <div className="w-full sm:max-w-[75%] md:w-7/12 pt-12 shrink-0">
          <Button aria-label="recent report" role="link" asChild variant={'ghost'} className="rounded-full px-[6px] bg-neutral-50 text-[16px] font-poppins">
            <Link href={'/'} className="flex gap-4 items-start">
              <span className="bg-brand text-white px-2 py-1 rounded-full">New</span>
              <span className="text-secondary-text">2022 Q2 Report</span>
              <span className="p-1 ml-2 rounded-full">
                <ChevronRightIcon />
              </span>
            </Link>
          </Button>
          <h1 className="text-4xl xs:text-5xl sm:text-[56px] md:text-[54px] lg:text-[68px] xl:text-[88px] 2xl:text-[92px] font-black tracking-tighter leading-[1.087] text-primary-text mt-6 mb-4 text-start">Global Insurance Market Index</h1>
          <p className="text-sm md:regular-16 font-light text-secondary-text text-start w-full max-w-[600px] mb-10 tracking-wide leading-snug">The Global Insurance Market Index is our proprietary measure of global commercial insurance premium pricing change at renewal, providing insights on the world's major insurance markets.</p>
          <Button className="px-8 py-6 w-full xs:w-fit rounded-xl bg-brand hover:bg-brand-dark font-notosans capitalize font-bold duration-300 transition-all" aria-label="Learn More" role="button">
            Learn more
          </Button>
          <div className="py-8 mt-16 flex items-center space-x-5">
            <ul className="flex items-center -space-x-4 md:-space-x-5">
              {FEATUREDUSERSIMAGES.map((image) => (
                <li className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-[60px] lg:h-[60px] border-2 border-white rounded-full overflow-hidden" key={image}>
                  <Image src={image} alt={''} sizes={'50px'} fill className="object-cover select-none" />
                </li>
              ))}
            </ul>
            <div className="font-poppins flex flex-col items-start gap-0 md:gap-1">
              <span aria-label="customer count" className="text-lg tracking-tight text-green-1 font-bold">
                98k
              </span>
              <span className="text-secondary-text regular-14 md:regular-16">Insured Persons</span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/3 shrink hidden md:block">
          <div className="bg-gradient-to-bl from-[#B8E8EC] to-[#F8F8F8] w-full h-full rounded-tl-[300px] pl-12 pt-12" role='banner'>
            <Image src={'/images/hero-img.jpg'} priority alt="" width={400} height={400} className="w-full h-full rounded-tl-[240px] object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;