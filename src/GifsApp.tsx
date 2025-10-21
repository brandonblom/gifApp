import { SearchBar } from "./shared/components/SearchBar";
import { MockGifs } from "./gifs/components/GifsList";
import { CustomHeader } from "./shared/components/CustomHeader";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { useState } from "react";
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.actions";
import type { Gif } from "./gifs/interfaces/gif.interface";

export const GifsApp = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousTerms, setPreviousTerms] = useState(["dragon ball z"]);

  const handleTermClicked = (term: string) => {};

  const handleSerach = async (query: string = "") => {
    query = query.trim().toLowerCase();

    if (query.length === 0) return;

    if (previousTerms.includes(query)) return;

    setPreviousTerms([query, ...previousTerms].splice(0, 8));

    const gifs = await getGifsByQuery(query);
    setGifs(gifs);
  };

  return (
    <>
      {/* Header */}
      <CustomHeader
        title="Buscador de Gifs"
        description="Descrube y comparte el Gif perfecto"
      />

      {/* Search */}
      <SearchBar placeholder="Busca lo que quieras" onQuery={handleSerach} />

      {/* Busquedas previas */}
      <PreviousSearches
        searches={previousTerms}
        onLabelClicked={handleTermClicked}
      />

      {/* Gifs */}
      <MockGifs gifs={gifs} />
    </>
  );
};
