import Image from "next/image";
import imagemBackground from "../../../public/image/walpaper.jpg";

export default function BackgroundImagem() {
  return (
    <div className=" fixed inset-0 z-[-1] cover ">
      <Image
        src={imagemBackground}
        alt="imagem de ilustração"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}
