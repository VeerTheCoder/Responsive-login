import styled from "styled-components";
import React from "react";
import check from "./assets/check.png";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10%;
`;
const Left = styled.div`
  width: 45%;
  height: 27rem;
  @media (max-width:800px){
    display: none;
  }
`;
const Image = styled.img`
  width: 75%;
  height: auto;
  object-fit: cover;
  object-position: center;
`;
const Right = styled.div`
  width: 55%;
  padding: 4.5rem;
  border-radius: 0.75rem;
  background: #fff;
  box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.16);
  @media (max-width:800px){
    width: 90%;
  }
  @media (max-width:500px){
    width: 90%;
    padding: 1rem;
  }
`;
const Heading = styled.h2`
  font-family: Poppins;
  font-size: 2.5rem;
  padding: 1rem;
  font-style: normal;
  font-weight: 900;
  line-height: 110%;
  text-align: center;
  margin-bottom: 0.7rem;
  @media (max-width:500px){
    font-size: 2rem;
  }
`;
const Label = styled.label`
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 0.7rem;
`;
const Checklabel = styled.label`
  color: #737b86;
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 400;
  margin-bottom: 0.7rem;
  margin-left: 0.2rem;
  @media (max-width:500px){
    font-size: 0.55rem;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  padding: 0.5rem;
  border-radius: 0.5rem;
  outline: none;
  border: none;
  border: 1px solid gray;
  margin-bottom: 0.7rem;
`;
const Bottomdiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Check = styled.div`
  display: flex;
`;
const Link = styled.a`
  text-decoration: none;
  color: #f78719;
  cursor: pointer;
  font-size: 0.7rem;
  @media (max-width:500px){
    font-size: 0.55rem;
  }
`;

const Terms = styled.span`
  text-decoration: underline;
  color: #f78719;
  @media (max-width:500px){
    font-size: 0.55rem;
  }
`;
const Btndiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Button = styled.button`
  width: 60%;
  height: 2.5rem;
  border: none;
  color: #fff;
  margin-top: 0.9rem;
  border-radius: 0.5rem;
  background: #1575a7;
`;
const Para = styled.p`
  margin-top: 0.9rem;
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (max-width:500px){
    font-size: 0.55rem;
  }
`;
const Login = () => {
  return (
    <Container>
      <Left>
        <Image src={check} alt="image" />
      </Left>
      <Right>
        <Heading>Login</Heading>
        <Form>
          <Label>Login ID</Label>
          <Input type="text" placeholder="Enter Login Id" />
          <Label>Password</Label>
          <Input type="Password" placeholder="Enter Password" />
          <Bottomdiv>
            <Check>
              <Input type="checkbox" />
              <Checklabel>Remember Me</Checklabel>
            </Check>
            <Link>Change Password</Link>
          </Bottomdiv>
          <Check>
            <Input type="checkbox" />
            <Checklabel>
              Agree to <Terms>Terms & Conditions</Terms>
            </Checklabel>
          </Check>
          <Btndiv>
            <Button>Login</Button>
          </Btndiv>
          <Btndiv>
            <Para>
              Don't have an account? <Terms>Register Here</Terms>
            </Para>
          </Btndiv>
        </Form>
      </Right>
    </Container>
  );
};

export default Login;
