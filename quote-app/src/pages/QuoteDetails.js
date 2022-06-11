import { Fragment } from "react";
import { Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";

const QuoteDetails = () => {
    const params = useParams()
    return (
        <Fragment>
            <h1>Quotes Details Page</h1>
            <p>{params.quoteId}</p>
            <Route path='/quotes/:quoteId/comments'>
                <Comments />
            </Route>
        </Fragment>
    )
}

export default QuoteDetails;
