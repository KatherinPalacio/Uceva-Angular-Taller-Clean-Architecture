import { Category } from '../core/domain/models/category.model';

/**
 * Datos simulados (mock) de categorías para pruebas y desarrollo.
 *
 * @remarks
 * Este arreglo contiene información de ejemplo de categorías de películas
 * que puede ser utilizada durante el desarrollo, pruebas unitarias,
 * o como fallback cuando el backend no está disponible.
 *
 * Las categorías incluyen diferentes tipos de agrupaciones como:
 * Estrenos, Populares, Recomendadas, Clásicas y Familiares,
 * cada una con una descripción que explica su propósito.
 *
 * @example
 * ```typescript
 * import { CATEGORIES_MOCK } from './mocks/categories.mocks';
 *
 * // Usar en un repositorio local
 * const categories = CATEGORIES_MOCK;
 * console.log(categories.length); // 5
 *
 * // Buscar una categoría por nombre
 * const popular = CATEGORIES_MOCK.find(cat => cat.name === 'Populares');
 * ```
 */
export const CATEGORIES_MOCK: Category[] = [
  { id: 1, name: 'Estrenos', description: 'Películas recientemente agregadas' },
  { id: 2, name: 'Populares', description: 'Películas más vistas por los usuarios' },
  { id: 3, name: 'Recomendadas', description: 'Contenido sugerido por la plataforma' },
  { id: 4, name: 'Clásicas', description: 'Películas reconocidas históricamente' },
  { id: 5, name: 'Familiares', description: 'Contenido apto para todo público' },
];