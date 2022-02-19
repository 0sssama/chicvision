import { Input } from "@/components";

type Props = {};

function SearchBanner({}: Props) {
  return (
    <div className="SearchBanner w-full flex items-center justify-center">
      <div className="SearchBanner-content flex flex-col items-center">
        <div className="titles w-full">
          <h1 className="title primary black">Chic Vision :</h1>
          <h1 className="title primary">Valeur, solution, service!</h1>
        </div>
        <div className="texts w-full">
          <p className="text">
            Le <span className="orange">meilleur partenaire</span> commercial de
            lunettes <span className="orange">tout-en-un</span> pour vous{" "}
            <span className="orange">aider</span> à poursuivre votre croissance
            rapide.
          </p>
        </div>
        <Input
          type="main-search"
          placeholder="Rechercher les marques, produits..."
        />
      </div>
    </div>
  );
}

export default SearchBanner;
