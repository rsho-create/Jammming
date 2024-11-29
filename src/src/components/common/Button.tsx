type ButtonProps = {
    callbackAction: string;
    onClickCallback: () => void
}

export const Button = ({ callbackAction, onClickCallback }: ButtonProps) => {

    return (
        <>
            <button onClick={onClickCallback}>{callbackAction}</button>
        </>
    )
}