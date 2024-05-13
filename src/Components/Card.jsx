import Texto from "./Texto"
import Divisao from "./Divisao"
import Textoo from "./Textoo"
import {Cart, Cartao} from '../Styles/Card'
const Card = () => {
    return(
        <Cartao>
            <Texto 
            title='Join our community'
            subtitle='30-day, hassie-free 
            money back guarantee'
            text='Gain acess to our full library of tutoriais
            along with expert code reviews. Perfect for any
            developers who are serious about honing their skills'/>
            <Cart>
                <Subscription
                title='Monthly Subscription'
                texto='$29'
                subtitle='Full acess for less than $1 a day'
                />
                <Textoo 
                title='Why Us'
                text='Tutoriais by industry experts Peer & expert
                code review Coding exercises Acess to our Github repos
                Community forum Flashcard decks New videos every week'/>
            </Cart>
        </Cartao>
    )
}

export default Card