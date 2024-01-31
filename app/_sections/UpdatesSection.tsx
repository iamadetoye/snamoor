import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { UPDATES } from '@/constants';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';

const UpdatesSection = () => {
  return (
    <section className="overflow-x-clip py-12">
      <div className="max-container padding-container">
        <div className="w-full max-w-3xl mx-auto flex flex-col items-center gap-4">
          <p className="text-secondary-text text-[16px] font-notosans font-medium">Updates</p>
          <h2 className="bold-40 text-center">Insurance & Happenings in the Globe</h2>
          <p className="regular-16 text-secondary-text text-center max-w-xl">We do our possible best at all times and deliver to our customers accurately, some basic info here</p>
        </div>
        <div className="b">
          <Carousel
            opts={{
              align: 'center',
              loop: true,
            }}
            className="w-full flex flex-col gap-3"
          >
            <CarouselContent className="py-16">
              {UPDATES.map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white flex flex-col items-center gap-6 p-12 my-4 duration-300 transition-all rounded-5xl shadow-[0px_0px_50px_0px_#0000000e] hover:shadow-[0px_0px_200px_0px_#0000001e] hover:z-10">
                    <div className="h-12 w-12 rounded-full bg-violet-700 flex justify-center items-center text-whiten">
                      <Image src={'/icons/verified.svg'} width={28} height={28} alt="" />
                    </div>
                    <span className="text-2xl font-notosans font-semibold text-center leading-tight tracking-tight">{`Russia-Ukraine Conflict`}</span>
                    <p className="regular-16 text-secondary-text text-center tracking-normal leading-tight">{`Insights and resources to help you navigate the Russia-Ukraine crisis and also increase your awareness of how important it is to get yourself insured.`} </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext />
            <CarouselPrevious />
          </Carousel>

          {/* <div className="flex mx-auto py-4 space-x-8 w-fit">
          <--> Maybe I'll implement this later.. <-->
            <Button variant={'ghost'} className="p-0  aspect-square rounded-full">
              <ArrowLeftIcon />
            </Button>
            <Button variant={'ghost'} className="p-0  aspect-square rounded-full">
              <ArrowRightIcon />
            </Button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default UpdatesSection;
