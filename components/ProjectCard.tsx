import Link from "next/link";
import Image from "next/image";

interface Props {
  id: string;
  title: string;
  img: string;
  description?: string; // Mark description as optional
}

const ProjectCard = ({ id, title, img, description = "" }: Props) => {
  return (
    <Link href={`/projects/${id}`}>
      <div className="w-full h-80 border-[1px] border-blue-600 overflow-hidden relative rounded-lg group cursor-pointer">
        {/* Image */}
        <Image
          className="object-cover translate-y-0 group-hover:-translate-y-full transition-transform duration-700"
          width={350}
          height={350}
          src={img}
          alt={title}
        />

        {/* Always Visible Title */}
        <div className="absolute bottom-0 w-full bg-blue-600 text-white text-center py-2 font-bold">
          {title}
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-4 text-white">
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          {/* Display description preview */}
          <p className="text-sm text-center line-clamp-3">
            {description.slice(0, 100)} <span className="font-semibold">...read more</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
