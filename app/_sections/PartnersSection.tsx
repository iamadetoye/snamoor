import Image from 'next/image';

import { PARTNERS } from '@/constants';

const PartnersSection = () => {
  return (
    <section className="overflow-x-clip py-12">
      <div className="max-container padding-container">
        <div className="w-full max-w-3xl mx-auto flex flex-col items-center space-y-4">
          <p className="text-secondary-text text-[16px] font-notosans font-medium">Some of our Partners</p>
        </div>
        <ul className="flex space-x-12 items-center justify-between my-6 overflow-scroll hide-scrollbar">
          {PARTNERS.map((partner, i) => (
            <li className="relative min-w-[100px]" key={i}>
              <Image src={partner} alt="" width={200} height={80} className="w-full" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PartnersSection;
