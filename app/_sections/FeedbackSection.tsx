import { Button } from '@/components/ui/button';
import { FEATUREDREVIEWS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

const FeedbackSection = () => {
  return (
    <section className="py-12 min-h-[550px]" id="feedback">
      <div className="max-container padding-container flex items-center space-x-12">
        <div className="w-full md:w-1/2 h-full relative min-h-[400px]">
          <div className="ml-[5%] mt-[5%] hover:z-10 opacity-30 peer hover:opacity-100 transition-all duration-300 hover:scale-110 origin-top-left absolute w-3/5 py-5 px-10 flex flex-col gap-6 bg-white rounded-3xl shadow-[0px_0px_100px_15px_#0000001e] hover:shadow-[0px_0px_100px_15px_#0000003e]">
            <div className="flex gap-5 items-center">
              <Image src={FEATUREDREVIEWS[0].image} alt={FEATUREDREVIEWS[0].key} width={50} height={50} className="aspect-square rounded-full" />
              <h5 className="text-[20px] font-bold font-poppins tracking-[5%]">{FEATUREDREVIEWS[0].name}</h5>
            </div>
            <p className="regular-16 text-tertiary-text font-poppins ">{FEATUREDREVIEWS[0].messsage}</p>
            <div className="flex gap-4">
              <ul className="flex items-center space-x-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <li key={i}>
                    <Image src={'/icons/star-filled.svg'} alt="" width={24} height={24} />
                  </li>
                ))}
              </ul>
              <span className="text-[16px] font-semibold">{FEATUREDREVIEWS[0].rating}</span>
            </div>
          </div>
          <div className="ml-[35%] mt-[22.5%] hover:z-10 peer-hover:opacity-30 transition-all duration-300 hover:scale-110 origin-bottom-right absolute w-3/5 py-5 px-10 flex flex-col gap-6 bg-white rounded-3xl shadow-[0px_0px_100px_15px_#0000001e] hover:shadow-[0px_0px_100px_15px_#0000003e]">
            <div className="flex gap-5 items-center">
              <Image src={FEATUREDREVIEWS[1].image} alt={FEATUREDREVIEWS[1].key} width={50} height={50} className="aspect-square rounded-full" />
              <h5 className="text-[20px] font-bold font-poppins tracking-[5%]">{FEATUREDREVIEWS[1].name}</h5>
            </div>
            <p className="regular-16 text-tertiary-text font-poppins ">{FEATUREDREVIEWS[1].messsage}</p>
            <div className="flex gap-4">
              <ul className="flex items-center space-x-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <li key={i}>
                    <Image src={'/icons/star-filled.svg'} alt="" width={24} height={24} />
                  </li>
                ))}
              </ul>
              <span className="text-[16px] font-semibold">{FEATUREDREVIEWS[1].rating}</span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/5 flex flex-col items-center md:items-start space-y-4">
          <p className="text-secondary-text text-[16px] font-notosans font-medium">Feedback</p>
          <h2 className="bold-40 text-center md:text-start">Some Reviews by Our Wonderful Clients</h2>
          <p className="regular-16 text-tertiary-text text-center md:text-start max-w-xl">Lorem Ipsum but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum but also the leap into electronictype setting, remaining essentially unchanged.</p>
          <div className="">
            <Button className="px-8 py-6 mt-8 rounded-xl bg-brand hover:bg-brand-dark font-notosans capitalize font-bold duration-300 transition-all" asChild>
              <Link href={'#'}>Get a Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;