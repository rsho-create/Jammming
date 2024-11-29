import Track from "../types/Track"
import { Song } from "./Song";

type SearchResultsProps = {
    results: Array<Track>;
}

export const SearchResults = ({ results }: SearchResultsProps) => {
    const songs = results.map((track: Track) => {
        return (<Song song={track} />)
    })

    return <>{songs}
    </>
}