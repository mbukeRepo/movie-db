export interface SimpleShow {
    id: number;
    name: string;
    backdrop_path: string;
    title?: string;
}

export interface Season {
    id: number;
    poster_path: string;
    name: string;
    overview: string;
}

export interface CompoundShow extends SimpleShow{
    genres: {name: string};
    in_production: boolean;
    number_of_seasons: number;
    seasons: Season[]
}