import React from 'react';
import clsx from 'clsx';

type PPProps = {
  as?: React.ElementType;
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export default function PagePS({
  as: Comp = 'section',
  id,
  className,
  children,
  ...restProps
}: PPProps){

  return (
    <Comp id={id} className={clsx('flex  flex-col w-auto h-fit px-4 py-4 md:px-6 md:py-14 lg:py-16', className)} {...restProps}>
      
      {children}

    </Comp>
  )
}