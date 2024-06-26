import Netflix from "../../../../img/netflix.jpg";
import Image from "next/image";

export default function header() {
    return (
      <>
      <div className="logoNetflix">
        <Image src={Netflix} alt="Logo Netflix" />
      </div>
      </>
    );
  }