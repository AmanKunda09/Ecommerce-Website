import styled from "styled-components"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import RoomIcon from '@mui/icons-material/Room';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

const Container=styled.div`
display: flex;
`;
const Left=styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`;
const Logo=styled.h1``;
const Desc=styled.p`
margin:20px 0px;
`;
const SocialContainer=styled.div`
display: flex;
`;
const SocialIcon=styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${prop=>prop.color};
display: flex;
justify-content: center;
align-items: center;
margin-right: 20px;
`;
const Centre=styled.div`
flex: 1;
padding: 20px;
`;
const Title=styled.h3`
margin-bottom: 30px;
`;
const List=styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`;
const ListItem=styled.li`
width: 50%;
margin-bottom: 10px;
`;

const Right=styled.div`
flex: 1;
padding: 20px;

`;
const ContactItem=styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`;
const Payment=styled.img`
width: 50%;
`;


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>
                Aman
            </Logo>
                <Desc>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse necessitatibus vero debitis quidem iure alias vitae ullam tempora consequatur similique delectus doloremque, dignissimos obcaecati sunt cum iusto perspiciatis quisquam recusandae.
                </Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <FacebookIcon/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <InstagramIcon/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <TwitterIcon/>
                </SocialIcon>
                
            </SocialContainer>
        </Left>
        <Centre>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Centre>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
               <RoomIcon style={{marginRight:"10px"}}/> address
            </ContactItem>
            <ContactItem>
               <LocalPhoneIcon style={{marginRight:"10px"}}/> number
            </ContactItem>
            <ContactItem>
               <EmailIcon style={{marginRight:"10px"}}/> email@gmail.com
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>

    </Container>
  )
}

export default Footer