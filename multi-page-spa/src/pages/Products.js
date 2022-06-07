import { Link } from "react-router-dom"

const Products = () => {

    return (
        <section>
            <h1>Products Page</h1>
            <ul>
                <Link to='/products/p1'><li>A Book</li></Link>
                <Link to='/products/p2'><li>A Carpet</li></Link>
                <Link to='/products/p3'><li>An Online Course</li></Link>
            </ul>
        </section>
    )
}

export default Products