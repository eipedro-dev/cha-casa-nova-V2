import entradaCasa from "../../assets/entrada-casa.svg";
import { PublicNavigation } from "../../components/layout/Navigation";

export const Home = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#faf8f4] px-5 text-[#563b4c]">
      <section className="w-full max-w-[420px] text-center">
        {/* Título */}
        <header className="flex flex-col items-center">
          <span className="text-3xl font-medium tracking-[8px]">CHÁ DE</span>

          <h1 className="-mt-2 font-['Allura'] text-[clamp(88px,15vw,92px)] font-normal leading-[0.9] text-[#ae3156]">
            casa nova
          </h1>
        </header>

        {/* Ilustração */}
        <div className="mx-auto mt-3 w-full">
          <img
            src={entradaCasa}
            alt="Ilustração de uma entrada de casa com plantas"
            className="mx-auto block max-h-[300px] w-full object-contain"
          />
        </div>

        {/* Data e horário */}
        <section className="-ml-3 mt-1 flex items-center  justify-around">
          <div className="flex flex-col text-[21px] leading-[0.95]">
            <span>Sábado</span>
            <span>às 20h</span>
          </div>

          <span className="text-2xl text-[#ae3156]">♥</span>

          <span className="text-[68px] font-bold leading-none">10</span>

          <span className="text-2xl text-[#ae3156]">♥</span>

          <div className="flex flex-col text-[21px] leading-[0.95]">
            <span>Dez</span>
            <span>2026</span>
          </div>
        </section>

        {/* Endereço */}
        <footer className="mt-2 border-t border-[#8c7d83] pt-1 text-center">
          <p className="m-0 text-[18px]">Rua: Alegre, 123, Cidade Brasileira</p>
        </footer>
        <PublicNavigation mapsUrl="https://www.google.com/maps/search/?api=1&query=Rua+Alegre%2C+123%2C+Cidade+Brasileira" />
      </section>
    </main>
  );
};
