import Track from "../types/Track"

type SongProps = {
    song: Track;
}

export const Song = ({song}: SongProps) => {
    return (<>
        <div>{song.name}</div>
    </>)
}