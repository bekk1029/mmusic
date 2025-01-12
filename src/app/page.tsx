import Banner from "@/components/banner";
import FooterPlayer from "@/components/footer";
import Navbar from "@/components/navbar";
import CategoryList from "@/components/shared/category-list";
import Sidebar from "@/components/sidebar";
import { ARTISTS_LIST } from "@/constant";

export default function Home() {
  return (
    <div className="min-h-screen flex">
      <div className="md:w-full md:max-w-[220px]">
        <Sidebar />
      </div>
      <div className="w-full overflow-scroll">
        <Navbar />
        <main className="w-full flex flex-col gap-6 pt-24 pb-16 px-6 md:px-8 container max-w-1098">
          <Banner />

          <CategoryList title="New Hot" list={ARTISTS_LIST} type="default" />

          <CategoryList
            title="Шинэ уран бүтээлч"
            description="Таны дагасан уран бүтээлчдээс тулгуурласан миксүүд"
            list={ARTISTS_LIST}
            type="circle"
          />

          <CategoryList
            title="Шинээр нэмэгдсэн бүтээлүүд"
            list={ARTISTS_LIST}
            type="default"
          />

          <CategoryList
            title="Шинээр нэмэгдсэн бүтээлүүд"
            list={ARTISTS_LIST}
            type="square"
          />

          <CategoryList
            title="Шинээр нэмэгдсэн хамтрал уран бүтээлчид"
            list={ARTISTS_LIST}
            type="square"
          />

          <CategoryList title="Mood mix" list={ARTISTS_LIST} type="default" />
          <CategoryList
            title="Сонгосон жанр"
            list={ARTISTS_LIST}
            type="square"
          />
          <CategoryList title="Mmusic mix" list={ARTISTS_LIST} type="square" />
          <FooterPlayer />
        </main>
      </div>
    </div>
  );
}
