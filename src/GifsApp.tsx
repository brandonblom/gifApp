import { SearchBar } from "./shared/components/SearchBar";
import { MockGifs } from "./gifs/components/GifsList";
import { CustomHeader } from "./shared/components/CustomHeader";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { useGifs } from "./gifs/hooks/useGifs";

export const GifsApp = () => {
  const { gifs, previousTerms, handleSerach, handleTermClicked } = useGifs();

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
