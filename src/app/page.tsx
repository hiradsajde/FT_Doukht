"use client";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT } from "@/utils/queries";
import BarLoader from "react-spinners/BarLoader";
import {
  faPhoneAlt,
  faAngleUp,
  faWindowRestore,
  faTicket,
  faUniversity,
} from "@fortawesome/free-solid-svg-icons";
import Hero from "@/components/hero";

function HeroDisplay({ list , slug}: { list: any , slug:string}) {
  const { loading, error, data } = useQuery(GET_PRODUCT , {
    variables : {
      slug : slug
    }
  });


  if (loading) return <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"><BarLoader color="#6454C7"/></div>;
  if (error) return <p>خطا : {error.message}</p>;
  return <Hero data={data} list={list} />;
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
