import createFn from "@/controlers/create";
import deleteFn from "@/controlers/delete";
import { useState, useEffect, ComponentProps } from "react";
import Image from "next/image";
import { postproduct } from "@/controlers/postProduct";
import { tagsEnum } from "@/enum/tags";
import { updateProduct } from "@/controlers/updateProduct";


interface CreateFormProps extends ComponentProps<"form"> {
  divStyle?: string;
  formStyle?:string;
}

const UpdataForm = (props: CreateFormProps) => {
  const [file, setFile] = useState("");

  const handleUploadFile = (e: any) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const [tag, setTag] = useState<string>("");
  const [tags, setTags] = useState<string[]>([""]);
  const [size, setSize] = useState<string>("");
  const [sizes, setSizes] = useState<string[]>([""]);
  const [title, setTile] = useState<string>();
  const [price, setPrice] = useState<number>();
  const [quant, setQuan] = useState<number>();
  const [data, setData] = useState<any>();

  useEffect(() => {
    if (tag.trim() !== "") {
      if (tags.includes(tag)) {
        return;
      }

      const newTags = [...tags, tag];
      setTags(newTags);
      setTag("");
    }
  }, [tag, tags]);

  useEffect(() => {
    if (size.trim() !== "") {
      if (sizes.includes(size)) {
        return;
      }

      const newSizes = [...sizes, size];
      setSizes(newSizes);
      setSize("");
    }
  }, [size]);

  useEffect(() => {
    async function getProduct(id: number) {
      const response = await fetch("http://localhost:3001/product/12");
      const dados = await response.json();
      setData(dados);
    }
    getProduct(1);
  }, []);

  useEffect(() => {
    setPrice(data?.currentPrice);
    setTile(data?.title);
    setQuan(data?.quantity);
    setSizes(data?.sizes);
    const dataTags = data?.tags;
    const newTags: string[] = [];
    if (dataTags) {
      for (const dataTag of dataTags) {
        newTags.push(tagsEnum[`${dataTag.id}`]);
      }
    }
    setTags(newTags);
    setFile(data?.image)
  }, [data]);

  async function createInvoice(formData: FormData) {
    const rawFormData = {
      title: formData.get("title"),
      currentPrice: Number(formData.get("value")),
      sizes: sizes,
      tags: { set: [{ id: 2 }] },
      quantity: Number(formData.get("quantity")),
    };

    updateProduct(rawFormData, 2);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await createInvoice(formData);
  };

  return (
    <form
      className={`max-w-5xl w-full h-auto flex items-center border border-black justify-center gap-16 px-2 overflow-hidden mb-14 ${props.formStyle}`}
      action={createInvoice}
      onSubmit={handleSubmit}
    >
      <input
        type="file"
        name="file"
        id="file"
        className="hidden"
        onChange={handleUploadFile}
      />
      <label htmlFor="file" className="border border-black">
        <Image src={file} height={486} width={414} alt="" />
      </label>
      <input
        type="text"
        name="imageUrl"
        id=""
        value={file}
        className="hidden"
      />
      <div className={`flex flex-col h-auto gap-4 py-3 ${props.divStyle}`}>
        <h3 className="modal_edit_form_title">Nome</h3>
        <input
          type="text"
          className={`modal_edit_form_input`}
          id="inTeste"
          name="title"
          onChange={(e) => setTile(e.target.value)}
          value={title}
        />
        <h3 className="modal_edit_form_title">Valor:</h3>
        <input
          type="text"
          className={`modal_edit_form_input`}
          name="value"
          onChange={(e) => setPrice(Number(e.target.value))}
          value={price}
        />
        <h3 className="modal_edit_form_title">Cor:</h3>
        <div className="flex gap-2 ml-2">
          <input
            type="radio"
            name="color"
            className=" modal_edit_form_radio bg-white"
            value={"white"}
          />
          <input
            type="radio"
            name="color"
            className=" modal_edit_form_radio bg-zinc-800"
            value={"gray"}
          />
          <input
            type="radio"
            name="color"
            className=" modal_edit_form_radio bg-red-500"
            value={"red"}
          />
          <input
            type="radio"
            name="color"
            className=" modal_edit_form_radio bg-blue-800 checked:bg-blue-600 "
            value={"blue"}
          />
        </div>
        <h3 className="modal_edit_form_title">Tamanhos</h3>
        <div className="flex w-full flex-col justify-between  items-center ml-2 mb-5">
          <select
            name=""
            id=""
            className="modal_edit_form_input bg-bg-card mb-2"
            value={size}
            onChange={(e) =>
              createFn({ stateFn: setSize, item: e.target.value })
            }
          >
            <option value="P">P</option>
            <option value="M">M</option>
            <option value="G">G</option>
            <option value="GG">GG</option>
          </select>
          <div className="flex gap-2 flex-wrap font-bold">
            {sizes?.map((item, index) =>
              item !== "" ? (
                <div
                  key={index}
                  className="bg-black text-white p-2 rounded-2xl"
                >
                  {item}
                  <span
                    className="text-white font-bold ml-2 cursor-pointer"
                    onClick={() =>
                      deleteFn({ array: sizes, index, stateFn: setSizes })
                    }
                  >
                    X
                  </span>
                </div>
              ) : (
                ""
              )
            )}
          </div>
        </div>
        <h3 className="modal_edit_form_title">Categorias</h3>
        <select
          className="modal_edit_form_input bg-bg-card"
          title="tags"
          onChange={(e) => createFn({ stateFn: setTag, item: e.target.value })}
          value={tag}
        >
          <option value="">Tags</option>
          <optgroup title="categorias" label="Categorias">
            <option value="Calças">Calças</option>
            <option value="Blusas">Blusas</option>
            <option value="Jaquetas">Jaquetas</option>
            <option value="Vestidos">Vestidos</option>
          </optgroup>
          <optgroup title="categorias" label="Estilo">
            <option value="Calças">Casual</option>
            <option value="Blusas">Street</option>
            <option value="Jaquetas">Sensual</option>
            <option value="Vestidos">Social</option>
          </optgroup>
          <optgroup title="categorias" label="Caimento da peça">
            <option value="Oversize">Oversize</option>
            <option value="Skinny">Skinny</option>
            <option value="Solto">Solto</option>
            <option value="Slim Fit">Slim Fit</option>
          </optgroup>
        </select>
        <div className="flex gap-2 flex-wrap font-bold">
          {tags?.map((item, index) =>
            item !== "" ? (
              <div key={index} className="bg-black text-white p-2 rounded-2xl">
                {item}
                <span
                  className="text-white font-bold ml-2 cursor-pointer"
                  onClick={() =>
                    deleteFn({ array: tags, index, stateFn: setTags })
                  }
                >
                  X
                </span>
              </div>
            ) : (
              ""
            )
          )}
        </div>
        <h3 className="modal_edit_form_title">Quant</h3>
        <input
          type="number"
          name="quantity"
          className="modal_edit_form_input"
          placeholder="quant"
          onChange={(e) => setQuan(Number(e.target.value))}
          value={quant}
        />
        <div className="flex justify-evenly">
          <button
            type="submit"
            className="bg-black text-white rounded-[60px] text-[24px] px-8 py-2 text-center lg:w-max"
          >
            Salvar
          </button>
          <button
            type="button"
            className="bg-black text-white rounded-[60px] text-[24px] px-8 py-2 text-center lg:w-max"
          >
            Excluir
          </button>
        </div>
      </div>
    </form>
  );
};

export default UpdataForm;
