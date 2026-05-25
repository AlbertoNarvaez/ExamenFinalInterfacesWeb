export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: { name: string; url: string };
  location: { name: string; url: string };
  image: string;
};

export type Info = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};

export type CharacterResponse = {
  info: Info;
  results: Character[];
};
