import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../../environments/environments';


const baseUrl = environment.baseUrlImage;

@Pipe({
    name: 'tvImage'
})

export class TvImagePipe implements PipeTransform {
    transform(path: string | null | undefined): string {

        // Si no existe → usar imagen del public
        if (!path || path.trim().length === 0) {
            return '/no-image.png';
        }

        // Si ya es URL completa → retornar
        if (path.startsWith('http')) return path;

        // Si empieza con / → concatenar
        if (path.startsWith('/')) {
            return `${environment.baseUrlImage}${path}`;
        }

        // Si viene sin "/" → caso raro
        return `${environment.baseUrlImage}/${path}`;
    }
}