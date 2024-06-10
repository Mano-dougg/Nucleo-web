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

export function Modal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex justify-start text-text-primary font-bold w-full mb-2 text-base">
          + Adicionar pessoa a fila
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex justify-start text-text-primary font-bold w-full mb-2 text-base">
            Adicionar pessoa a fila
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col py-4 gap-4">
          <input
            type="text"
            name="client"
            placeholder="nome completo do cliente"
            className="bg-bg-input px-6 py-4 w-full"
          />
          <input
            type="text"
            name="client"
            placeholder="nome completo do cliente"
            className="bg-bg-input px-6 py-4 w-full"
          />
        </div>
        <DialogFooter>
          <Button type="submit" className="">
            Save changes
          </Button>
          <Button type="reset">Cancelar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default Modal;
