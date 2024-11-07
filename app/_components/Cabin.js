import TextExpander from "@/app/_components/TextExpander";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function Cabin({cabin}){
  const { id, name, maxCapacity, regularPrice, discount, image, description }=cabin;

    return  <div className="grid grid-cols-[3fr_4fr] gap-20 border border-primary-800 py-37 px-10 mb-24">
    <div className="relative scale-x-[1.15] scale-y-[0.9] -translate-x-[0.75rem]">
      <Image fill src={image} className="object-cover" alt={`Cabin ${name}`} />
    </div>

    <div>
      <h3 className="text-accent-100 font-black text-7xl mb-5 translate-x-[-32px] bg-primary-950 p-6 pb-1 w-[150%]">
        Cabin {name}
      </h3>

      <p className="text-lg text-primary-300 mb-10">
        <TextExpander>{description}</TextExpander>
        </p>

      <ul className="flex flex-col gap-4 mb-7">
        <li className="flex gap-3 items-center">
          <UsersIcon className="h-5 w-5 text-primary-600" />
          <span className="text-lg">
            For up to <span className="font-bold">{maxCapacity}</span>{" "}
            guests
          </span>
        </li>
        <li className="flex gap-3 items-center">
          <MapPinIcon className="h-5 w-5 text-primary-600" />
          <span className="text-lg">
            Located in the heart of the{" "}
            <span className="font-bold">Dolomites</span> (Italy)
          </span>
        </li>
        <li className="flex gap-3 items-center">
          <EyeSlashIcon className="h-5 w-5 text-primary-600" />
          <span className="text-lg">
            Privacy <span className="font-bold">100%</span> guaranteed
          </span>
        </li>
      </ul>
    </div>
  </div>
}