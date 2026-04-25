import { Product } from "../core/domain/models/product.model";

/**
 * Datos simulados (mock) de productos para pruebas y desarrollo.
 *
 * @remarks
 * Este arreglo contiene información de ejemplo de productos
 * que puede ser utilizada durante el desarrollo, pruebas unitarias,
 * o como fallback cuando el backend no está disponible.
 *
 * Los datos incluyen productos de diferentes categorías como
 * lácteos y frutas para representar casos de uso variados.
 *
 * @example
 * ```typescript
 * import { PRODUCTS_MOCK } from './mocks/products.mocks';
 *
 * // Usar en un repositorio local
 * const products = PRODUCTS_MOCK;
 * console.log(products.length); // 2
 * ```
 */
export const PRODUCTS_MOCK: Product[] = [
    {
        id: 1,
        name: 'Leche entera',
        category: 'Lacteos',
        price: 4500,
    },
    {
        id: 2,
        name: 'Manzana roja',
        category: 'Frutas',
        price: 3200,
    }
];