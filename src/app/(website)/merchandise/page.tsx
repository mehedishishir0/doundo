import MerchandiseProduct from "@/components/merchandise/MerchandiseProduct";
import Hero1 from "@/components/shared/Hero1";

const page = () => {
  return (
    <div>
      <Hero1
        image="/hero.jpeg"
        title="MERCHANDISE"
        subtitle="Wear the"
        description="Apparel, accessories, and keepsakes inspired by the thirteen symbols. Designed in Canada, made to last."
        text="Symbols."
      />
      <MerchandiseProduct />
    </div>
  );
};

export default page;
