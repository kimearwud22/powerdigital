import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Power DIgital Technology",
  description: "This is Home for Power Digital Technologi",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Kami menyediakan jasa pembuatan website dan aplikasi mobile dengan harga yang terjangkau dan berkualitas tinggi untuk membantu bisnis anda berkembang lebih pesat."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
