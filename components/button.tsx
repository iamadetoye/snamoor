import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { Button as DefaultButton } from './ui/button';

const buttonStyles = cva('rounded-3xl py-2 text-white w-80 font-sm', {
  variants: {
    intent: {
      primary: 'bg-blue-700',
      secondary: 'bg-black',
      danger: 'bg-red-600',
    },
    defaultVariants: {
      intent: 'primary',
    },
  },
});

interface ButtonProps extends VariantProps<typeof buttonStyles> {
  text: string;
}

const Button = ({ intent, text, ...props }: ButtonProps) => {
  return (
    <DefaultButton className={buttonStyles({ intent })} {...props}>
      {text}
    </DefaultButton>
  );
};
export { Button };
