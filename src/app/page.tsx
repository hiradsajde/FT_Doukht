import { client } from "@/utils/graphql/client";
import { GET_PRODUCT } from "@/utils/graphql/queries";
import {
  faPhoneAlt,
  faAngleUp,
  faWindowRestore,
  faTicket,
  faUniversity,
} from "@fortawesome/free-solid-svg-icons";
import Hero from "@/components/hero";
import { IconListProps } from "@/utils/types";


async function HeroDisplay({ list , slug}: { list: IconListProps[] , slug:string}) {
  const {data} = await client.query({query : GET_PRODUCT , variables:{slug}})
  return <Hero 
  {...data.courseBySlug}
  list={list} />;
}

export default function Page(props: any) {
  return (
    <div className="mt-8">
      <HeroDisplay
        slug="olgou-sazi-astar-keshi"
        list={[
          {
            icon: faPhoneAlt,
            text: "پشتیبانی یکساله",
          },
          {
            icon: faAngleUp,
            text: "اپدیت رایگان و مادام‌العمر",
          },
          {
            icon: faWindowRestore,
            text: "ضمانت بازگشت وجه",
          },
          {
            icon: faTicket,
            text: "گواهینامه پایان دوره",
          },
          {
            icon: faUniversity,
            text: "بیش از ۷۰هزار هنرجو",
          },
        ]}
      />
    </div>
  );
}