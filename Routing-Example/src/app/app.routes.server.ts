import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**', // Catch-all route
    renderMode: RenderMode.Prerender // Set to prerender mode
  }
];