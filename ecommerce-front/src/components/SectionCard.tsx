interface SectionCardProps{
    title:string;
    children: React.ReactNode
}

const SectionCard = (props:SectionCardProps) => {
  return (
    <section className="flex flex-col gap-20 max-w-5xl w-11/12 h-auto items-center justify-center mb-20">
      <p className="w-full lg:text-start text-center  text-3xl font-semibold lg:mr-20">
        {props.title}
      </p>
      <div className="flex w-full justify-between h-auto mb-20 lg:flex-row flex-col items-center lg:gap-0 gap-9">
        {props.children}
      </div>
    </section>
  );
};

export default SectionCard;
