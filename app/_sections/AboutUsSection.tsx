import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const AboutUsSection = () => {
  return (
    <section id="about-us">
      <div className=" max-container lg:pr-0 py-16 lg:py-0 padding-container lg:padleft-container flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="w-full lg:w-2/5 flex flex-col items-center lg:items-start space-y-4">
          <p className="text-secondary-text text-[16px] font-notosans font-medium">About us</p>
          <h2 className="bold-32 lg:bold-40 sm:max-w-[80%] text-center lg:text-start">Snamoor Brokers Make Your Family Happy</h2>
          <p className="text-sm md:regular-16 sm:max-w-[80%] text-tertiary-text text-center lg:text-start max-w-xl">Lorem Ipsum but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum but also the leap into electronictype setting, remaining essentially unchanged.</p>
          <div className="">
            <Button className="px-8 py-6 mt-8 rounded-xl bg-brand hover:bg-brand-dark font-notosans capitalize font-bold duration-300 transition-all" asChild>
              <Link href={'#'}>Learn more</Link>
            </Button>
          </div>
        </div>
        <div className="lg:pl-24 relative w-full lg:w-3/5 h-fit lg:h-[620px] flex justify-center items-center bg-yellow-50,">
          <div className="absolute w-full h-full left-0 top-0 z-0 flex -space-x-[300px]">
            <div className="bg-red-500/[15%] blur-[75px] rounded-full shrink-0 w-[600px] h-[600px]" />
            <div className="bg-green-50/[15%] blur-[75px] rounded-full shrink-0 w-[600px] h-[600px]" />
          </div>
          <Image src={'/images/about-img.jpg'} width={800} height={712} alt="family" className="z-10 rounded-tr-[200px] rounded-l-[200px]" />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
