export interface SimpleMovie{
    id: number;
    title: string;
    backdrop_path: string;
    name?: string;
}

export interface CompoundMovie extends SimpleMovie {
    originalLanguage: string;
    release_date: string;
    adult: boolean;
    genres: {name: string}[];
    overview: string;
    poster_path: string;
}