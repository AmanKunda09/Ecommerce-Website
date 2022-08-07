import React from 'react'
import styled from 'styled-components'

const Container=styled.div``;
const Wrapper=styled.div``;
const Title=styled.div``;
const Form=styled.div`
display: flex;
flex-direction: column;
width: 50%;
`;
const Input=styled.input``;

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>
                CREATE AN ACCOUNT
            </Title>
            <Form>
                <Input placeholder="name"/>
                <Input placeholder="last name"/>
                <Input placeholder="email"/>
                <Input placeholder="username"/>
                <Input placeholder="password"/>
                <Input placeholder="confirm password"/>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register