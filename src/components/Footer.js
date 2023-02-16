import React from 'react';
// import {
//     MDBFooter,
//     MDBContainer,
//     MDBCol,
//     MDBRow
// } from 'mdb-react-ui-kit';

function Footer() {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-left'>
            <MDBContainer className='p-4'>
                <MDBRow>
                    <MDBCol lg='10' md='12' className='mb-4 mb-md-0'>
                        <h5 className='text-uppercase'>ANGEL FACE</h5>

                        <p>
                            This is where some text goes. Perhaps an explainer about what the site is; its missions and goals, core functionality or its founding.
                        </p>
                    </MDBCol>

                    <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                        <h6 className='text-uppercase fw-bold mb-4'>Links</h6>
                        <p>
                            <a href='#!' className='text-reset'>
                                Privacy Policy
                            </a>
                        </p>
                        <p>
                            <a href='#!' className='text-reset'>
                                Your data
                            </a>
                        </p>
                        <p>
                            <a href='#!' className='text-reset'>
                                Report content
                            </a>
                        </p>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                &copy; {new Date().getFullYear()} Copyright:{' '}
                <a className='text-dark' href='https://mdbootstrap.com/'>
                    angel-face.com
                </a>
            </div>
        </MDBFooter>
    );
}

export default Footer;