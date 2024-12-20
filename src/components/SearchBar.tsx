import { Button } from "./common/Button"
import TextInput from "./styled/Input"

export const SearchBar = () => {
    return (
        <>
        <TextInput type="text" /> <Button callbackAction="Search"  onClickCallback={() => {}}/>
        </>
    )
}