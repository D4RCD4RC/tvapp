import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environments';
import { TvResponse } from '../interfaces/tv.interface';
import { Observable, tap } from 'rxjs';

const baseUrl = environment.baseUrl
const apiKey = environment.api_key

@Injectable({ providedIn: 'root' })
export class TvService {
    private http = inject(HttpClient);

    getTvShows(): Observable<TvResponse> {
        return this.http.get<TvResponse>(`${baseUrl}/popular?language=es-ES&page=1&api_key=${apiKey}`)
            .pipe(tap((resp) => console.log(resp)))
    }

} 