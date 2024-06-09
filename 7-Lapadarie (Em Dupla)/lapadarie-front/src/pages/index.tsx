import Card from "@/components/Card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Fragment } from "react";

function DialogDemo() {
  return (
    <div className="flex md:flex-row gap-4 w-full flex-col">
      <Card
        titulo={"Pessoas na fila"}
        cardData={"7"} // Este valor vai receber os dados do fetch da API relativo aos dados do card
        varianteCard={"card"}
        varianteData={"card-data"}
        icon={"/people.svg"}
      />

      <Card
        titulo={"Pães vendidos"}
        cardData={"350"}// Este valor vai receber os dados do fetch da API relativo aos dados do card
        varianteCard={"card"}
        varianteData={"card-data"}
        icon={"/carrinho.svg"}
      />

      <Card
        titulo={"Pães vendidos"}
        cardData={`R$ 175,00`}// Este valor vai receber os dados do fetch da API relativo aos dados do card
        varianteCard={"card2"}
        varianteData={"card-data2"}
        icon={"/Money.svg"}
      />
    </div>
  );
}

export default DialogDemo;
