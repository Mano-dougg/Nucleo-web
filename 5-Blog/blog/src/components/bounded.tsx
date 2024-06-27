
type BoundedProps ={
    as?: React.ElementType;
    className?: string;
    children: React.ReactNode;

}

export default function Bounded({
    
    as: Comp= "section",
    className,
    children,
    ...restProps
}:BoundedProps){
    


    return(
        <Comp className="section" {...restProps}>
            <div className="card"> {children}</div>
        </Comp>
    )
}