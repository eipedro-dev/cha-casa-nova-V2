
import { Link } from 'react-router-dom'

export const Gifts = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#faf8f4] px-5 text-center text-[#563b4c]">
      <h1 className="font-['Allura'] text-6xl text-[#ae3156]">
        Lista de presentes
      </h1>

      <p className="mt-3 text-lg">
        Em breve, nossa lista de presentes estará disponível.
      </p>

      <Link
        to="/"
        className="mt-6 border-b border-[#ae3156] pb-1 text-[#ae3156]"
      >
        Voltar ao convite
      </Link>
    </main>
  )
}
