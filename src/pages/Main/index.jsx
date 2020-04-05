import React from 'react';

// Bootstrap
import Container from 'react-bootstrap/Container';

// Components
import Form from '../../components/Form';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

const Main  = () => {
    return (
        <>
            <NavBar />
            <Container>
                <Form />
            </Container>
            <Footer />
        </>
    )
};

export default Main;