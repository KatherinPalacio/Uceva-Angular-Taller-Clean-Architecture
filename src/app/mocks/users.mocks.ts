import { User } from "../core/domain/models/user.model";

/**
 * Datos simulados (mock) de usuarios para pruebas y desarrollo.
 *
 * @remarks
 * Este arreglo contiene información de ejemplo de usuarios
 * que puede ser utilizada durante el desarrollo, pruebas unitarias,
 * o como fallback cuando el backend no está disponible.
 *
 * Los datos incluyen usuarios de diferentes ingenierías para
 * representar casos de uso variados.
 *
 * @example
 * ```typescript
 * import { USERS_MOCK } from './mocks/users.mocks';
 *
 * // Usar en un repositorio local
 * const users = USERS_MOCK;
 * console.log(users.length); // 2
 * ```
 */
export const USERS_MOCK: User[] = [
    {
        id: 1,
        name: 'Carlos',
        lastName: 'Ramírez',
        age: 22,
        email: 'carlos.ramirez@example.com',
        engineering: 'Sistemas',
    },
    {
        id: 2,
        name: 'Ana',
        lastName: 'Gómez',
        age: 24,
        email: 'ana.gomez@example.com',
        engineering: 'Industrial',
    }
];