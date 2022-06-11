import { Fragment } from "react";
import { Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";


const DUMMY_QUOTES = [
    { id: 'q1', author: 'Mitko', text:'Learning React is big fun!'},
    { id: 'q2', author: 'Mitko', text:'This app is taking shape!'},
]

const QuoteDetails = () => {
    const params = useParams()
    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

    if (!quote) {
        return (
            <p>No quote found !</p>
        )
    }
    return (
        <Fragment>
            <HighlightedQuote text={quote.text} author={quote.author}/>
            <Route path='/quotes/:quoteId/comments'>
                <Comments />
            </Route>
        </Fragment>
    )
}

export default QuoteDetails;
