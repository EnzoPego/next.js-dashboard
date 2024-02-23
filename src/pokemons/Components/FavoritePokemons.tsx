'use client'

import { useAppSelector } from "@/store"
import { PokemonGrid } from "./PokemonGrid"
import { IoHeartOutline } from "react-icons/io5"



export const FavoritePokemons = () => {

    const favoritesPokemons = useAppSelector( state => Object.values( state.pokemons.favorites ))
 
  return (
    // <PokemonGrid pokemons={favoritesPokemons} />
    <>
      {
        favoritesPokemons.length === 0
        ? <NoFavorites />
        : <PokemonGrid pokemons={favoritesPokemons} />
      }
    </>
  )
}


export const NoFavorites = () => {
    return(
      <div className="flex flex-col h-[50vh] items-center justify-center">
        <IoHeartOutline className="text-red-500" size={100}/>
        <span>No hay favoritos</span>
      </div>
    )
  }