import { useRef, useState } from "react";
import { Button, CardGroup, Container } from "react-bootstrap";

import data from '../models/coffees';
import CoffeeShop from "./CoffeeShop";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [coffees, setCoffees] = useState(data);
    const buttonAdd = useRef(null);

    const handleClick = () => {
        const coffee = {
            id: 4,
            name: 'Café',
            image: 'imgs/cafe4.jpg',
        };

        setCoffees([...coffees, coffee]);
        buttonAdd.current.disabled = true;

    };

    return (
        <Container>
            <h1 className='mt-5 text-center'>Menu</h1>
            <div className='text-right'>
                <Button 
                    variant='secondary'
                    className='rounded-circle mr-4 font-weight-bold'
                    onClick={handleClick}
                    ref={buttonAdd}
                >
                    +
                </Button>
            </div>
            <CardGroup className='my-3'>
                {coffees.map((coffee) => {
                    return <CoffeeShop coffee={coffee} key={coffee.id} />
                })}
            </CardGroup>
        </Container>
    );
}

export default App;