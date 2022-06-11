import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
    { id: 'q1', author: 'Mitko', text:'Learning React is big fun!'},
    { id: 'q2', author: 'Mitko', text:'This app is taking shape!'},
]

const AllQuotes = () =>{

    return(
        <QuoteList quotes={DUMMY_QUOTES} />
    )
}

export default AllQuotes;