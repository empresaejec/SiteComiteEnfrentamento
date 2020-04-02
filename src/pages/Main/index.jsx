import React from 'react';

// Bootstrap
import Container from 'react-bootstrap/Container';

// Components
import Form from '../../components/Form';
import NavBar from '../../components/NavBar';

const Main  = () => {
    return (
        <>
            <NavBar />
            <Container>
                <Form />
            </Container>
        </>
    )
};

export default Main;