import { inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class PaginationService {


    private activatedRouter = inject(ActivatedRoute);
    private router = inject(Router);

    currentPage = toSignal(
        this.activatedRouter.queryParamMap.pipe(
            map((params) => {
                const page = Number(params.get('page'));
                // Si no es número, es menor a 1 o mayor a 500 (límite de TMDB), volvemos a 1
                if (isNaN(page) || page < 1) {
                    return 1;
                }
                if (page > 500) {
                    return 500;
                }
                return page;
            })
        ),
        {
            initialValue: 1

        }
    );

    // ===== NUEVO =====
    resetPage() {
        this.router.navigate([], {
            queryParams: { page: 1 },
            queryParamsHandling: 'merge',
        });
    }

}
