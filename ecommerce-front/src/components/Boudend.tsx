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
        <Comp className={clsx("flex justify-center", className)} {...restProps}>
            <div className="flex justify-center sm:w-[1224px] sm:h-[357px] w-[310px] h-[90px] mt-12 mx-auto ">
                {children}
            </div>
        </Comp>
    );
}
