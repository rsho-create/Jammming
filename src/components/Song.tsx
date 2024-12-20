import Track from "../types/Track"
import FlexColumnContainer from "./styled/FlexColumnContainer";
import FlexRowContainer from "./styled/FlexRowContainer";

type SongProps = {
    song: Track;
}

export const Song = ({ song }: SongProps) => {
    return (<>
        <FlexRowContainer className="songBorder">
            <FlexColumnContainer>{song.name}</FlexColumnContainer>
            <FlexColumnContainer>{song.artist}</FlexColumnContainer>
            <FlexColumnContainer>{song.album ?? "Unknown"}</FlexColumnContainer>
        </FlexRowContainer>

    </>)
}