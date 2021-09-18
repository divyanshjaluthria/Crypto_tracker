import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function Footer() {
    return (
        <Container>
            <div className="footer d-flex justify-content-center align-items-center flex-column">
                <Social className="container  d-flex">
            <a href="facebook.com"><Facebook className="fb" ></Facebook></a>
            <a href="twitter"><TwitterIcon className="tw"/></a>
            <a href="instagram.com"><InstagramIcon className="ig"/></a>
            <a href="linkedin.com"><LinkedInIcon className="li"/></a></Social>
                <p>Content Designed & Created by Divyansh Jaluthria © 2021</p>
            </div>
        </Container>
    )
}

export default Footer


const Container = styled.div`

.footer{
    height: 30vh;
}

`
 const Facebook = styled(FacebookIcon)``

 const Social = styled.div`
    justify-content: center;
 align-items: center;
 width: 20vw;
 padding: 15px;
 height: auto;

 .fb {
     font-size: 40px;
    }
    
    .tw{
        font-size: 40px;
    }
    
    .ig{
        font-size: 40px;
    }
    .li{
        font-size: 40px;
}
 `
 


