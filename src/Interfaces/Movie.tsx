export interface SimpleMovie{
    id: number;
    title: string;
    backdrop_path: string;
}

export interface CompoundMovie extends SimpleMovie {
    originalLanguage: string;
    releaseDate: string;
    adult: boolean;
}