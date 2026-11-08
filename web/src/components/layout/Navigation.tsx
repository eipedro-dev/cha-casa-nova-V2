import { Link } from 'react-router-dom'
import { House } from 'lucide-react';
import { Gift } from 'lucide-react';
import { MapPin } from 'lucide-react';


interface PublicNavigationProps {
  mapsUrl: string
}

export const PublicNavigation = ({
  mapsUrl,
}: PublicNavigationProps) => {
  return (
    <nav className="mt-6 border-t border-[#e5dce0] pt-4">
      <div className="flex items-center justify-center gap-6">

        <Link
          to="/"
          className="flex flex-col items-center gap-1 text-[#563b4c] transition-colors hover:text-[#ae3156]"
        >
          <House className="text-xl" />
          <span className="text-sm">Início</span>
        </Link>

        <span className="h-8 w-px bg-[#d8cbd1]" />

        <Link
          to="/presentes"
          className="flex flex-col items-center gap-1 text-[#563b4c] transition-colors hover:text-[#ae3156]"
        >
          <Gift className="text-xl" />
          <span className="text-sm">Presentes</span>
        </Link>

        <span className="h-8 w-px bg-[#d8cbd1]" />

        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 text-[#563b4c] transition-colors hover:text-[#ae3156]"
        >
          <MapPin className="text-xl" />
          <span className="text-sm">Como chegar</span>
        </a>

      </div>
    </nav>
  )
}
