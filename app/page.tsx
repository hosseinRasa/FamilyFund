import Footer from "@/components/client-side/footer";
import ImageSlider from "@/components/client-side/image-slider";
import MenuItem from "@/components/client-side/menu-itme";
import MiddleInfo from "@/components/client-side/middle-info";
import SideMenu from "@/components/client-side/side-menu";
import SvgDie from "@/components/icons/svg-die";
import SvgLoan from "@/components/icons/svg-loan";
import SvgOrganization from "@/components/icons/svg-organization";
import SvgPerson from "@/components/icons/svg-person";

export default function Home() {
  return (
    <div className="flex flex-col h-full ">
      <header>
        <SideMenu />
        <ImageSlider />
      </header>

      {/* <h1 className="text-blue-500 pr-4 pt-0">خبر فوری : تمامی مراحل فوق ...</h1> */}
      <main className=" bg-linear-to-r flex flex-col from-pink-300 h-9/12 to-red-400 rounded-2xl">
        <MiddleInfo />
        <div
          className="bg-gray-100 p-2 rounded-2xl w-full
        h-full flex flex-row flex-wrap gap-5 justify-around overflow-auto "
        >
          <MenuItem icon={<SvgOrganization />} title="تعریف موسسه" />
          <MenuItem icon={<SvgLoan />} title="تعریف وام" />
          <MenuItem icon={<SvgPerson />} title="تعریف اشخاص" />
          <MenuItem
            icon={<SvgDie className="animate-[spin_2s_linear_infinite]" />}
            title="نتایج قرعه کشی"
          />
        </div>
      </main>
      <footer className="h-20 p-2  sticky bottom-0 text-black bg-white">
        <Footer />
      </footer>
    </div>
  );
}
