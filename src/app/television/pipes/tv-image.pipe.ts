import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../../environments/environments';


const baseUrl = environment.baseUrlImage;

@Pipe({
    name: 'tvImage'
})

export class TvImagePipe implements PipeTransform {
    transform(value: string | string[]): string {
        if (typeof value === 'string') {
            return `${baseUrl}${value}`;
        }

        const image = value.at(0);

        if (!image) {
            return './images/no-image.png'
        }

        return `${baseUrl}${image}`

    }
}