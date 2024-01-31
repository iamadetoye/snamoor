import { Button } from '@/components/ui/button';
import { HeadphonesIcon, PhoneOutgoingIcon } from 'lucide-react';
import Link from 'next/link';

const ContactSection = () => {
  return (
    <section className="pt-12 pb-24">
      <div className="max-container padding-container relative">
        <div className="absolute w-[200px] xs:w-[240px] sm:w-[360px] md:w-[400px] h-[200px] xs:h-[240px] sm:h-[360px] md:h-[400px] -left-[360px] lg:-left-[200px] -top-[180px] md:-top-[200px] bg-[url(/patterns/green-pattern.svg)] bg-cover bg-no-repeat" />
        <div className="absolute w-[400px] h-[400px] -right-[360px] lg:-right-[200px] -bottom-[200px] bg-[url(/patterns/green-pattern.svg)] bg-cover bg-no-repeat" />
        <div className="w-full max-w-3xl mx-auto flex flex-col items-center gap-4">
          <p className="text-secondary-text text-[16px] font-notosans font-medium">Support</p>
          <h2 className="bold-32 lg:bold-40 text-center">Anything Unclear or need some help? Relax, we are 24/7 for you</h2>
          <span className="h-4" />
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            <div className="w-full h-[400px] bg-white rounded-3xl flex flex-col gap-4 px-8 py-4 items-center justify-center shadow-[0px_0px_200px_0px_#0000001e] hover:z-10 transition-all duration-300">
              <figure className="w-16 h-16 bg-white rounded-full drop-shadow-xl flex items-center justify-center">
                <PhoneOutgoingIcon className="text-green-1 w-6 h-6" />
              </figure>
              <h4 className="bold-20 text-center">Contact Us</h4>
              <p className="line-clamp-5 regular-12 xs:regular-14 md:regular-16 text-tertiary-text text-center">Insights and resources to help you navigate the Russia-Ukraine crisis and also increase your awareness of</p>
              <Button variant={'default'} asChild className=" w-3/5 mt-6 rounded-full bg-brand hover:bg-brand-dark transition-all duration-300">
                <Link href={'#'}>Call now</Link>
              </Button>
            </div>
            <div className="w-full h-[400px] bg-white rounded-3xl flex flex-col gap-4 px-8 py-4 items-center justify-center shadow-[0px_0px_200px_0px_#0000001e] hover:z-10 transition-all duration-300">
              <figure className="w-16 h-16 bg-white rounded-full drop-shadow-xl flex items-center justify-center">
                <HeadphonesIcon className="text-green-1 w-6 h-6" />
              </figure>
              <h4 className="bold-20 text-center">Customer Service</h4>
              <p className="line-clamp-5 regular-12 xs:regular-14 md:regular-16 text-tertiary-text text-center">Insights and resources to help you navigate the Russia-Ukraine crisis and also increase your awareness of</p>
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
