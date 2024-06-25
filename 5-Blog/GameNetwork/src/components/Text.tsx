import React from 'react';
import clsx from 'clsx';

type TpProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  size?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Text({
  as: Comp = 'h2',
  size = Comp.valueOf(),
  className,
  children,
  ...restProps
}: TpProps) {

  return (
    <Comp className={clsx('leading-tight font-bold',
    size === 'h1' && 'text-2xl md:text-4xl', 
    size === 'h2' && 'text-xl md:text-3xl',
    size === 'h3' && 'text-lg md:text-2xl',
    size === ('h4' || 'h5') && 'text-base md:text-xl',
    size === 'p' && 'text-justify font-semibold text-sm md:text-lg',
    size === 'h6' && 'text-justify font-semibold text-xs md:text-sm',
    className)} {...restProps}>

        {children}

    </Comp>
  );
};