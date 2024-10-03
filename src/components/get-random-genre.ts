import { genres } from "../data/genres.json";

export default function getRandomGenre(): { genre: string; subgenre: string } {
  const randomGenreIndex = Math.floor(Math.random() * genres.length);
  const selectedGenre = genres[randomGenreIndex];

  const randomSubgenreIndex = Math.floor(
    Math.random() * selectedGenre.subgenres.length
  );
  const selectedSubgenre = selectedGenre.subgenres[randomSubgenreIndex];

  return {
    genre: selectedGenre.name,
    subgenre: selectedSubgenre,
  };
}
