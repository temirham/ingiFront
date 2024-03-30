import MyCard from './MyCard';
import { useEffect } from 'react';
import { Col, Row} from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux';
import { loadProducts } from '../store/ProductSlice';

function Cataog(){

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadProducts());
    }, [dispatch]);
    
    const products = useSelector((state) => state.products.products);
    console.log("Состояние хранилища Redux:", products);
    
    return(
        <div className="d-flex, p-3">
            {products.length === 0 ? (
            <p>Loading...</p>
            ) : (
            <Row md={40} className="g-4">
                {products.map((product, id) => (
                    <Col key={id}>
                        <MyCard {...product} />
                    </Col>
                ))}
            </Row>
            )}
        </div>
    );
}

export default Cataog;