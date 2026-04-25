import { Movie } from '../core/domain/models/movie.model';

/**
 * Datos simulados (mock) de películas para pruebas y desarrollo.
 *
 * @remarks
 * Este arreglo contiene información de ejemplo de películas
 * que puede ser utilizada durante el desarrollo, pruebas unitarias,
 * o como fallback cuando el backend no está disponible.
 *
 * Los datos incluyen películas de diferentes géneros como:
 * Drama, Acción, Comedia y Terror, abarcando un rango de años
 * desde 1997 hasta 2014 para representar casos de uso variados.
 *
 * @example
 * ```typescript
 * import { MOVIES_MOCK } from './mocks/movies.mocks';
 *
 * // Usar en un repositorio local
 * const movies = MOVIES_MOCK;
 * console.log(movies.length); // 5
 *
 * // Filtrar películas de drama
 * const dramas = MOVIES_MOCK.filter(movie => movie.genre === 'Drama');
 * ```
 */
export const MOVIES_MOCK: Movie[] = [
  { id: 1, name: 'Interestelar', genre: 'Drama', year: 2014 },
  { id: 2, name: 'Avengers', genre: 'Accion', year: 2012 },
  { id: 3, name: 'Son como niños', genre: 'Comedia', year: 2010 },
  { id: 4, name: 'El conjuro', genre: 'Terror', year: 2013 },
  { id: 5, name: 'Titanic', genre: 'Drama', year: 1997 },
];