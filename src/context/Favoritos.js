import React, { useContext, useState } from 'react'
import { createContext } from 'react';


export const FavoritosContext = createContext();
FavoritosContext.displayName = "Favoritos";

export default function FavoritosProvider({children}){
    const [favoritos,setFavoritos] = useState();

    return(
        <FavoritosContext.Provider
        value={{favoritos,setFavoritos}}>
            {children}
        </FavoritosContext.Provider>
    )

}

export function useFavoritoContext() {
    const { favoritos, setFavoritos } = useContext(FavoritosContext);

    function adicionarFavorito(novoFavorito) {
        let novaLista = Array.isArray(favoritos) ? [...favoritos] : [];

        const favoritoRepetido = novaLista.some((item) => item.id === novoFavorito.id);

        if (!favoritoRepetido) {
            novaLista.push(novoFavorito);
        } else {
            novaLista = novaLista.filter(favorito => favorito.id !== novoFavorito.id);
        }

        setFavoritos(novaLista);
    }

    return {
        favoritos,
        adicionarFavorito
    };
}