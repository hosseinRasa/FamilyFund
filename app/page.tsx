import ImageSlider from "@/components/client-side/image-slider";
import MenuItem from "@/components/client-side/menu-itme";
import MiddleInfo from "@/components/client-side/middle-info";
import SvgDie from "@/components/icons/svg-die";
import SvgLoan from "@/components/icons/svg-loan";
import SvgOrganization from "@/components/icons/svg-organization";
import SvgPerson from "@/components/icons/svg-person";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <ImageSlider />

      <main className="flex-1 min-h-0 bg-linear-to-r flex flex-col from-pink-300 to-red-400 rounded-2xl">
        <MiddleInfo />
        <div
          className="bg-gray-100 p-2 rounded-2xl w-full
         flex flex-1 flex-wrap gap-1 justify-around overflow-auto min-h-0"
        >
          <MenuItem icon={<SvgOrganization />} title="تعریف موسسه" />
          <MenuItem icon={<SvgLoan />} title="تعریف وام" />
          <Link href={"/users"}>
            {" "}
            <MenuItem icon={<SvgPerson />} title="تعریف اشخاص" />
          </Link>
          <MenuItem
            icon={<SvgDie className="animate-[spin_2s_linear_infinite]" />}
            title="نتایج قرعه کشی"
          />
        </div>
      </main>
    </>
  );
}
