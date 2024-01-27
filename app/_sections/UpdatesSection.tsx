import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { UPDATES } from '@/constants';
import { ArrowLeftIcon, ArrowRightIcon, VerifiedIcon } from 'lucide-react';

const UpdatesSection = () => {
  return (
    <section className="overflow-x-clip py-12">
      <div className="max-container padding-container">
        <div className="w-full max-w-3xl mx-auto flex flex-col items-center space-y-4">
          <p className="text-secondary-text text-[16px] font-notosans font-medium">Updates</p>
          <h2 className="bold-40 text-center">Insurance & Happenings in the Globe</h2>
          <p className="regular-16 text-secondary-text text-center max-w-xl">We do our possible best at all times and deliver to our customers accurately, some basic info here</p>
        </div>
        <div className="py-12">
          <Carousel
            opts={{
              align: 'center',
              loop: true,
            }}
            className="w-full flex flex-col gap-3"
          >
            <CarouselContent>
              {UPDATES.map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-4 hover:drop-shadow-lg">
                    <Card>
                      <CardContent className="flex flex-col space-y-6 aspect-square items-center justify-center p-6 ">
                        <div className="h-12 w-12 rounded-full bg-violet-700 flex justify-center items-center text-whiten">
                          <VerifiedIcon className="text-white" />
                        </div>
                        <h5 className="text-2xl font-notosans font-semibold text-center leading-tight tracking-tight">{`Russia-Ukraine Conflict`}</h5>
                        <p className="regular-16 text-tertiary-text text-center tracking-normal leading-tight">{`Insights and resources to help you navigate the Russia-Ukraine crisis and also increase your awareness of how important it is to get yourself insured.`} </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext />
            <CarouselPrevious />
          </Carousel>
          <div className="flex mx-auto py-4 space-x-8 w-fit">
            <Button variant={'ghost'} className="p-0  aspect-square rounded-full">
              <ArrowLeftIcon />
            </Button>
            <Button variant={'ghost'} className="p-0  aspect-square rounded-full">
              <ArrowRightIcon />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpdatesSection;
