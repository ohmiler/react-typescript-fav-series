// interface is a pretty good way to define
// a data and use that as a type in ts
export interface SeriesProps {
    seriesList: {
        name: string;
        imdb: number;
        cover: string;
        seasons: number;
        genre: string;
    }[]
}