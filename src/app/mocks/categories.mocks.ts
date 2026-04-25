import { Category } from '../core/domain/models/category.model';

export const CATEGORIES_MOCK: Category[] = [
  { id: 1, name: 'Estrenos', description: 'Películas recientemente agregadas' },
  { id: 2, name: 'Populares', description: 'Películas más vistas por los usuarios' },
  { id: 3, name: 'Recomendadas', description: 'Contenido sugerido por la plataforma' },
  { id: 4, name: 'Clásicas', description: 'Películas reconocidas históricamente' },
  { id: 5, name: 'Familiares', description: 'Contenido apto para todo público' },
];