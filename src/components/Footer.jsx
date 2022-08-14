import React from "react";
import styled from "styled-components";

const FooterGroup = styled.div`
  background: black;
  padding: 50px 0;
  display: grid;
  grid-gap: 20px;
`;
const Text = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #c1adeb;
  max-width: 500px;
  margin: 15px auto;
`;
const Button = styled.button`
  background: linear-gradient(102.24deg, #471db1 20%, #000000 60%);
  box-shadow: 0px 10px 20px rgba(193, 173, 235, 0.3);
  border-radius: 30px;
  color: white;
  border: 2px solid #c1adeb;
  padding: 15px 30px;
  font-weight: 500;
  font-size: 15px;
  justify-self: center;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  &:hover {
    box-shadow: 0 10px 30px rgba(193, 173, 235, 0.6);
    transform: translateY(-3px);
  }
`;
const LinkGroup = styled.div`
  width: 500px;
  margin: 30px auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;

  a {
    transition: 0.8s;
    margin: 0px auto;
  }

  a:hover {
    color: white;
  }
`;

const Copyright = styled.div`
  color: #515a7e;
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
`;

export default function Footer({ children }) {
  return (
    <FooterGroup>
      <Text>All Good things come to Those Who Wait</Text>
      <Button>Contact Developer</Button>
      <LinkGroup>
        <a href="/about">About Bushido</a>
        <a href="/wishlist">Wishlist</a>
        <a href="/app/profile">My Profile</a>
        <a href="/">Bushido Shop</a>
      </LinkGroup>
      <Copyright>{children}</Copyright>
    </FooterGroup>
  );
}
