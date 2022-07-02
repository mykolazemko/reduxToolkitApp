export interface ICharacter {
  id: number;
  name: string;
  status: string; //('Alive', 'Dead' or 'unknown').
  species: string;
  type: string;
  gender: string; //('Female', 'Male', 'Genderless' or 'unknown').
  origin: object;
  location: object;
  image: string; //(url)
  episode: []; //(urls)
  url: string;
  created: string;
};
