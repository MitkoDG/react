import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const params = useParams();

    return (
        <section>
            <h1>Product Detail</h1>
            <p>{params.productId}</p>

            <Link to='/products'>Back to products</Link>
        </section>
    )
}

export default ProductDetail;