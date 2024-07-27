interface SizeSelectProps {
  peerName: string;
  value: string;
}

const SizeSelect = (props: SizeSelectProps) => {
  return (
    <div>
      <input
        id={props.peerName}
        className={`hidden peer`}
        type="radio"
        name="status"
      />
      <label
        htmlFor={props.peerName}
        className={`flex items-center justify-center max-w-28  max-h-14 lg:px-10 lg:py-5 px-6 py-2 rounded-[60px] border border-black peer-checked:bg-black peer-checked:text-white text-2xl font-semibold`}
      >
        {props.value}
      </label>
    </div>
  );
};

export default SizeSelect;
