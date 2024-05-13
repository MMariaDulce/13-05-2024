import { Comeco, Text, Subtitle, Title} from "../Styles/Texto"

const Texto = ({title, subtitle, text}) => {
    return(
        <Comeco>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            <Text>{text}</Text>
        </Comeco>
    )
}

export default Texto;