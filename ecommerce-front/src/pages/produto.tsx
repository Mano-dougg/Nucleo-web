import Comentario from "@/components/comentario/Comentario";

const produto = () => {
  return (
    <section
      className={`flex flex-col h-screen w-full justify-center bg-bg-primary`}
    >
      <Comentario
        userImageUrl={"/Frame 104.png"}
        userName={"Luiza Silva"}
        comentario={
          "A blusa tem um caimento perfeito, estou simplesmente apaixonada!"
        }
        time={"postado a 3min"}
      />
    </section>
  );
};

export default produto;
