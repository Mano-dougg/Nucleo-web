import React from "react";
import clsx from "clsx";

type BoundedProps = {
    as?: React.ElementType;
    className?: string;
    children: React.ReactNode;
};

export default function Bounded({
    as: Comp = 'section',
    className,
    children,
    ...restProps
}: BoundedProps) {
    return (
        <Comp className={clsx(" ", className)} {...restProps}>
            <div className="flex justify-center items-center  sm:w-[85%] w-[98%]  mx-auto ">
                {children}
            </div>
        </Comp>
    );
}
