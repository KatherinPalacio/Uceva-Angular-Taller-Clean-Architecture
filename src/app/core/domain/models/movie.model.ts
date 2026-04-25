export interface Movie {
  id: number;
  name: string;
  genre: MovieGenre;
  year: number;
}

export type MovieGenre = 'Accion' | 'Comedia' | 'Drama' | 'Terror';