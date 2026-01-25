import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environments';
import { TvResponse } from '../interfaces/tv.interface';
import { Observable, tap } from 'rxjs';

const baseUrl = environment.baseUrl
const api_key = environment.api_key

interface Options {
    page?: number;
    language?: string;
    api_key?: string;
}

@Injectable({ providedIn: 'root' })
export class TvService {
    private http = inject(HttpClient);

    getTvShows(options: Options): Observable<TvResponse> {
        const { page = 1, language = 'es-ES' } = options;

        return this.http.get<TvResponse>(`${baseUrl}/popular`, {
            params: {
                language,
                page,
                api_key,
            }
        }).pipe(
            tap((res) => {
                console.log(res);
            })
        )
    }
}  