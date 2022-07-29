import React from 'react'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import styled from 'styled-components';


const Container=styled.div`
width:100%;
height:100vh;
display: flex;

position: relative;`;

const Arrow=styled.div`
width: 50px;
height: 50px;
background-color: #f7f2f2;
border-radius: 50%;
display: flex;
align-items: center;
justify-content:center;
position:absolute;
top:0;
bottom:0;
left: ${props=>props.direction === "left" && "10px"};
right: ${props=>props.direction === "right" && "10px"};
margin:auto;
cursor: pointer;
opacity: 0.5;
`;

const Wrapper=styled.div`
height: 100%;
`;
const Slide=styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
`;
const ImgContainer=styled.div`
height: 100%;
flex:1;
`;

const Image=styled.img`
height: 80%;
`;
const InfoContainer=styled.div`
flex: 1;
padding: 50px;
`;

const Title = styled.h1``;
const Desc = styled.p``;
const Button = styled.button``;


const Slider = () => {
  return (
    <Container>
        <Arrow direction="left">
            <ArrowLeftOutlinedIcon/>
        </Arrow>
        <Wrapper>
          <Slide>
          <ImgContainer>
          <Image src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/11/Young-woman-shopping-in-a-vintage-clothing-store-1296x728-header-1296x728.jpg?w=1155&h=1528"/>
          </ImgContainer>
          
          <InfoContainer>
            <Title>Summer SALE</Title>
            <Desc>Dont Compromise on Style!Flat 30% off for new users</Desc>
            <Button>Show Now</Button>
          </InfoContainer>
          </Slide>
        </Wrapper>
        <Arrow direction="right">
            <ArrowRightOutlinedIcon/>
        </Arrow>
    </Container>
  )
}

export default Slider