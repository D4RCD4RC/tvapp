import { Routes } from "@angular/router";
import { StoreFrontLayout } from "./layouts/store-front-layout/store-front-layout";
import { HomePage } from "./pages/home-page/home-page";
import { GenderPage } from "./pages/gender-page/gender-page";
import { TvSeason } from "./pages/tv-page/tv-season";
import { NotFoundPage } from "./pages/not-found-page/not-found-page";

export const storeFrontRoutes: Routes = [
    {
        path: '',
        component: StoreFrontLayout,
        children: [
            {
                path: '',
                component: HomePage,
            },
            {
                path: 'gender/:gender',
                component: GenderPage,
            },
            {
                path: 'tv/:id',
                component: TvSeason,
            },
            {
                path: '**',
                component: NotFoundPage,
            },
        ]
    },
    {
        path: '**',
        redirectTo: '',
    },
];

export default storeFrontRoutes;