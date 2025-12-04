import { MenuHome } from "@/components/MenuHome";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF4ED]  font-sans">
      <header className="ml-[170px] mt-10">
        <div className="menu-header flex justify-between items-center w-full">

          <Image
            src="/Logo.svg"
            alt="Conecta Logo"
            width={114}
            height={70}
          />
          <MenuHome />
        </div>
        <div
          className="absolute right-30 top-0 flex items-center"
        >

          <Image
            className="ml-8"
            src="/vector-trace-home.svg"
            alt="Vector Right"

            width={859}
            height={660}
          />
        </div>
        <div
          className="absolute right-0 top-0 flex items-center"
        >

          <Image
            className="ml-8"
            src="/vector-home-right.svg"
            alt="Vector Right"

            width={200}
            height={288}
          />
        </div>
      </header>
      <div
        className="mt-[30px] ml-[170px] max-w-[700px]  text-[56px] text-[#291334] "
      >

        <h1
          className="font-bold text-[64px] tracking-normal"
        >
          Conectando sonhos, transformando vidas.
        </h1>
        <h6
          className="text-[16px] max-w-[582px] font-normal font-poppins"
        >
          O conecta nasceu da escuta, do afeto e da vontade de transformar. Atuamos em favelas e comunidades levando educação digital, desenvolvimento emocional e experiências culturais.
        </h6>
      </div>
    </div>
  );
}
