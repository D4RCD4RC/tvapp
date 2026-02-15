import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environments';
import { TvResponse } from '../interfaces/tv.interface';
import { Observable, of, tap } from 'rxjs';
import { TvDetail } from '../interfaces/tv-detail.interface';

const baseUrl = environment.baseUrl;
const api_key = environment.api_key;

interface Options {
    page?: number;
    language?: string;
    api_key?: string;
}

@Injectable({ providedIn: 'root' })
export class TvService {
    private http = inject(HttpClient);

    private tvCache = new Map<string, TvResponse>();
    private tvGenreCache = new Map<string, TvDetail>();

    getTvShows(options: Options): Observable<TvResponse> {
        const { page = 1, language = 'es-ES' } = options;

        const cacheKey = `tv-popular-${language}-${page}`;

        if (this.tvCache.has(cacheKey)) {
            return of(this.tvCache.get(cacheKey)!);
        }

        return this.http
            .get<TvResponse>(`${baseUrl}/tv/popular`, {
                params: {
                    language,
                    page,
                    api_key,
                },
            })
            .pipe(
                tap((res) => this.tvCache.set(cacheKey, res)),
            );
    }

    getTvShowByid(id: string): Observable<TvDetail> {
        if (this.tvGenreCache.has(id)) {
            return of(this.tvGenreCache.get(id)!);
        }

        return this.http
            .get<TvDetail>(`${baseUrl}/tv/${id}`, {
                params: {
                    api_key,
                    language: 'es-ES',
                },
            })
            .pipe(
                tap((tv) => this.tvGenreCache.set(id, tv)),
            );
    }

    getTvShowsByGenre(options: {
        genreIds: number[];
        page?: number;
        language?: string;
    }): Observable<TvResponse> {
        const { genreIds, page = 1, language = 'es-ES' } = options;

        const cacheKeyGenre = `tv-genre-${genreIds.join(',')}-${language}-${page}`;

        if (this.tvCache.has(cacheKeyGenre)) {
            return of(this.tvCache.get(cacheKeyGenre)!);
        }

        return this.http
            .get<TvResponse>(`${baseUrl}/discover/tv`, {
                params: {
                    api_key,
                    language,
                    page,
                    with_genres: genreIds.join(','),
                    sort_by: 'popularity.desc',
                },
            })
            .pipe(
                tap((res) => this.tvCache.set(cacheKeyGenre, res)),
            );
    }
}
