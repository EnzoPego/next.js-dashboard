import { Pokemons } from "@/pokemons/interfaces/pokemons";


interface Props {
  params: { id: string };
}

const getPokemon = async (id: string): Promise<Pokemons>  => {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    cache: 'force-cache',
  }).then(res => res.json())

  console.log('Se cargó:',pokemon.name)
  return pokemon;
};


export default async function PokemonPage({params}:Props) {

  //console.log({params})

  const pokemons = await getPokemon(params.id)

  return (
    <div>
      <h1>Pokemon {params.id}</h1>
    </div>
  );
}