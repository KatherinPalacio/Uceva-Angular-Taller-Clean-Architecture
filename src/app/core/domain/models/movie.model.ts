/**
 * Modelo de dominio que representa una película.
 *
 * @remarks
 * Este modelo pertenece a la capa de dominio.
 * Define la estructura mínima que debe tener una película
 * dentro del sistema, independientemente de la fuente de datos.
 *
 * @example
 * ```typescript
 * const pelicula: Movie = {
 *   id: 1,
 *   name: 'Interestelar',
 *   genre: 'Drama',
 *   year: 2014
 * };
 * ```
 */
export interface Movie {
  /**
   * Identificador único de la película.
   */
  id: number;

  /**
   * Nombre o título de la película.
   */
  name: string;

  /**
   * Género cinematográfico de la película.
   *
   * @remarks
   * Este campo utiliza el tipo {@link MovieGenre}
   * para restringir los valores posibles.
   */
  genre: MovieGenre;

  /**
   * Año de lanzamiento de la película.
   */
  year: number;
}

/**
 * Géneros cinematográficos disponibles para las películas.
 *
 * @remarks
 * Este tipo define los valores permitidos para el campo `genre`
 * de una película.
 *
 * Los géneros disponibles son:
 * - `Accion`: Películas de acción y aventuras.
 * - `Comedia`: Películas humorísticas.
 * - `Drama`: Películas dramáticas y emotivas.
 * - `Terror`: Películas de horror y suspenso.
 *
 * @example
 * ```typescript
 * const genero: MovieGenre = 'Drama';
 * ```
 */
export type MovieGenre = 'Accion' | 'Comedia' | 'Drama' | 'Terror';