import {Texto2, Text} from '../Styles/Textoo'

const Textoo = ({title, text}) => {
    return(
        <Texto2>
            <h2>{title}</h2>
            <Text>{text}</Text>
        </Texto2>
    )
}

export default Textoo