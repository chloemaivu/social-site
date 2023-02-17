import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow
} from 'mdb-react-ui-kit';

function Footer() {
    return (
        <MDBFooter className='footer text-center text-lg-left'>
        <MDBContainer className='footer p-4'>
            <MDBRow>
                <MDBCol lg='10' md='12' className='mb-4 mb-md-0'>
                    <h5 className='text-uppercase'>😇ANGELFACE😇</h5>

                    <p>
                        ANGEL FACE is a new, up and coming social media platform with an emphasis on you! If you're tired of the latest corporate Twitter drama, the transparent marketing campaigns from your bezzie influencers, then ANGEL FACE is <em>the</em> platform for you! Our unique 'Blockchain technology'™ means you see all real content all the time.  
                    </p>
                </MDBCol>

                <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4 compact'>
                    <h6 className='text-uppercase fw-bold mb-4'>Links</h6>
                    <p>
                        <a label="tba" className='text-reset'>
                            Privacy Policy
                        </a>
                    </p>
                    <p>
                        <a label="tba" className='text-reset'>
                            Your data
                        </a>
                    </p>
                    <p>
                        <a label="tba" className='text-reset'>
                            Report content
                        </a>
                    </p>
                </MDBCol>
            </MDBRow>
        </MDBContainer>

        <div className='footer-base text-center p-3'>
            &copy; {new Date().getFullYear()} Copyright:{' '}
            <a href='https://mdbootstrap.com/'>
                angel-face.com
            </a>
        </div>
    </MDBFooter>
    );
}

export default Footer;