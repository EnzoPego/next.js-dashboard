import { PokemonGrid } from "@/pokemons/Components/PokemonGrid";
import { PokemonsResponse } from "@/pokemons/interfaces/pokemons-response";
import { SimplePokemon } from "@/pokemons/interfaces/simple-pokemon";

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

      <PokemonGrid pokemons={[]} />
    </div>
  );
}
