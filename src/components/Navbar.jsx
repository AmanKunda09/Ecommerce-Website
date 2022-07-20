import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
height: 60px;
`;
const Wrapper= styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
`;
const Left=styled.div`
flex: 1;`;
const Centre=styled.div`
flex: 1;`;
const Right=styled.div`
flex: 1;`;

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
           <Left>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ut ex et, saepe facere quos ducimus dolorem maxime! Provident fugiat magnam, adipisci ducimus eos tempore illo laborum voluptatem praesentium animi.</Left>
           <Centre>Centre</Centre>
           <Right>Right</Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar