import useTrailer from "../hooks/useTrailers";

interface Props{
    gameId: number;
}

const GameTrailer = ({gameId}: Props) => {
    const {data, error, isLoading} = useTrailer(gameId);

    if(isLoading) return null;

    if(error) throw error; 

    const first = data?.results[0];

    return first ? 
        (
            <video 
                src={first.data[480]}
                poster={first.preview}
                controls={true}
                style={{width: "100%"}}
            />
        ) : null;
}

export default GameTrailer;