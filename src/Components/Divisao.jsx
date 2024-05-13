import Button from "./Button"
import {Cartao, Title, Subtitle, Texto, Texto2, Texto3} from '../Styles/Divisao.js'

const Divisao = ({title, texto, subtitle}) =>{
    return(
        <Cartao>
            <Title>{title}</Title>
            <Texto><Texto2>{texto}</Texto2><Texto3>per month</Texto3></Texto>
            <Subtitle>{subtitle}</Subtitle>
            <Button 
            name='Sign Up'/>
        </Cartao>
    )
}

export default Divisao