import Track from "../types/Track"
import { Song } from "./Song";

type SearchResultsProps = {
    results: Array<Track>;
    resultsCount: number;
}

export const SearchResults = ({ results, resultsCount }: SearchResultsProps) => {
    const trackList = results.map((track) => {
        return <Song song={track} />
    })
    const count = resultsCount ?? 0;

    return <>{trackList} End of List: {count}
    </>
}