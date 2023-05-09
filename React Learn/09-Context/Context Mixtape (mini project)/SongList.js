import React, { useContext } from "react";
import { MixtapeContext } from "./MixtapeContext";
import { Song } from "./Song";

export const SongList = () => {
  const { genre, sortOrder, songs } = useContext(MixtapeContext);
  let result;
  if (genre === "all") {
    result = songs;
  } else {
    result = songs.filter((song) => song.genre === genre);
  }
  if (sortOrder === "ascending") {
    result.sort((a, b) => a.year - b.year);
  } else {
    result.sort((a, b) => b.year - a.year);
  }
  return (
    <>
      {result.map((song) => (
        <Song {...song} key={song.name} />
      ))}
    </>
  );
};
