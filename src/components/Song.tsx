import Track from "../types/Track"

type SongProps = {
    song: Track;
}

export const Song = ({song}: SongProps) => {
    return (<>
        <div>{song.name}</div>
        <div>{song.artist}</div>
        <div>{song.album ?? "Unknown"}</div>
    </>)
}