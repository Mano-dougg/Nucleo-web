import clsx from "clsx";

type BoundedProps = {
    as?: React.ElementType;
    className?: string;
    children: React.ReactNode;
}

export default function Bounded({
    as: Comp = "section",
    className,
    children,
    ...restProps
}: BoundedProps) {
    return (
        <Comp className={clsx("px-4 py-6 md:px-6 lg:py-8", className)} 
        {...restProps}>
            <div className="w-full max-width-w-6xl">
                {children}
            </div>
        </Comp>
    )
}