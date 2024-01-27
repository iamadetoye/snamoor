import { Button } from '@/components/ui/button';
import { HeadphonesIcon, PhoneOutgoingIcon } from 'lucide-react';
import Link from 'next/link';

const ContactSection = () => {
  return (
    <section className="pt-12 pb-24 bg-yfellow-50/50">
      <div className="max-container padding-container relative">
        <div className="absolute w-[400px] h-[400px] -left-[200px] -top-[200px] bg-[url(/patterns/green-pattern.svg)] bg-cover bg-no-repeat" />
        <div className="absolute w-[400px] h-[400px] -right-[200px] -bottom-[200px] bg-[url(/patterns/green-pattern.svg)] bg-cover bg-no-repeat" />
        <div className="w-full max-w-3xl mx-auto flex flex-col items-center space-y-4">
          <p className="text-secondary-text text-[16px] font-notosans font-medium">Support</p>
          <h2 className="bold-40 text-center">Anything Unclear or need some help? Relax, we are 24/7 for you</h2>
          {/* <p className="regular-16 text-secondary-text text-center max-w-xl">We do our possible best at all times and deliver to our customers accurately, some basic info here</p> */}
          <span className="h-4" />
          <div className="w-full flex gap-8">
            <div className="w-full md:w-1/2 h-[400px] bg-white rounded-3xl flex flex-col gap-4 px-8 py-4 items-center justify-center shadow-[0px_0px_200px_0px_#0000001e] hover:z-10 transition-all duration-300">
              <figure className="w-16 h-16 bg-white rounded-full drop-shadow-xl flex items-center justify-center">
                <PhoneOutgoingIcon className="text-green-1 w-6 h-6" />
              </figure>
              <h4 className="text-[26px] font-bold">Contact Us</h4>
              <p className="line-clamp-3 text-[16px] text-tertiary-text text-center">Insights and resources to help you navigate the Russia-Ukraine crisis and also increase your awareness of</p>
              <Button variant={'default'} asChild className=" w-3/5 mt-6 rounded-full bg-brand hover:bg-brand-dark transition-all duration-300">
                <Link href={'#'}>Call now</Link>
              </Button>
            </div>
            <div className="w-full md:w-1/2 h-[400px] bg-white rounded-3xl flex flex-col gap-4 px-8 py-4 items-center justify-center shadow-[0px_0px_200px_0px_#0000001e] hover:z-10 transition-all duration-300">
              <figure className="w-16 h-16 bg-white rounded-full drop-shadow-xl flex items-center justify-center">
                <HeadphonesIcon className="text-green-1 w-6 h-6" />
              </figure>
              <h4 className="text-[26px] font-bold">Customer Service</h4>
              <p className="line-clamp-3 text-[16px] text-tertiary-text text-center">Insights and resources to help you navigate the Russia-Ukraine crisis and also increase your awareness of</p>
              <Button variant={'default'} asChild className=" w-3/5 mt-6 rounded-full bg-brand hover:bg-brand-dark transition-all duration-300">
                <Link href={'#'}>Contact us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
