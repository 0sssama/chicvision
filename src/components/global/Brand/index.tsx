import { brandType } from "@/interfaces";
import Link from "next/link";
import { Button } from "@/components";

type Props = {
  data: brandType;
};

function Brand({ data }: Props) {
  return (
    <div className="Brand w-full">
      <div className="Brand-image">
        <img src={data.image} alt={data.name} />
      </div>
      <div className="Brand-content">
        <h3>{data.name}</h3>
        <p>{data.products} Produits</p>
        <div className="button-wrapper w-full">
          <Link href="#">
            <a>
              <Button type="dark-primary" className="w-full">
                Voir les produits &rarr;
              </Button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Brand;
