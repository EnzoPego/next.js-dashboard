import { FavoritePokemons } from "@/pokemons/Components/FavoritePokemons";


export const metadata = {
  title: "Favoritos",
  description: "SEO Title",
};


export default async function PokemonsPage() {

  return (
    <div className="flex flex-col">
      
      <span className="text-5xl my-2">
        Pókemons Favoritos <small className="text-blue-700"> Global State </small>
      </span>

      <FavoritePokemons />
  
    </div>
  );
}


