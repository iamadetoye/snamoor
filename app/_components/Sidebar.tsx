import { Button } from '@/components/ui/button';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { NAV_LINKS } from '@/constants';

import { AlignRightIcon } from 'lucide-react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="px-2">
          <AlignRightIcon />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="grid gap-8 py-4 h-full">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Button asChild key={link.key} variant={'ghost'}>
                <Link href={link.href} className="regular-16 font-light text-tertiary-tenxt flexCenter cursor-pointer transition-all hover:text-brand-dark">
                  {link.label}
                </Link>
              </Button>
            ))}
          </ul>
          <SheetClose asChild className="self-end">
            <Button className="bg-brand hover:bg-brand-dark transition-all duration-300">Contact us</Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
