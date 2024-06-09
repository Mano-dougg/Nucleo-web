import CardClient from "@/components/CardClient";

function DialogDemo() {
  return (
    <div className="flex md:flex-row gap-4 w-full flex-col">
      <CardClient cliente={"Alexandre Shyjada Sousa"} totalPao={"10"} totalPagar={"10,00"}></CardClient>
    </div>
  );
}

export default DialogDemo;
