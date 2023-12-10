import { styled } from "styled-components"

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(18, 20, 23, 0.5);
  z-index: 1200;`

export const ModalWindow = styled.div`
  width: 541px;
  height: 752px;
  border-radius: 24px;
  padding: 40px;
  background-color: #FFFFFF;`

export const Image = styled.img`
height: 248px;
border-radius: 14px;
object-fit: cover;`

export const Header = styled.h2`
font-size: 18px;
line-height: 1.33;
font-weight: 500;
color: #121417;`

export const Span = styled.span`
color: #3470FF;`

export const Desc = styled.p`
font-size: 12px;
line-height: 1.5;
color: rgba(18, 20, 23, 0.5);`

export const Text = styled.h3`
margin-top: 24px;
font-size: 14px;
line-height: 1.42;
color: #121417;`

export const Title = styled.h3`
margin-top: 24px;
font-size: 14px;
line-height: 1.42;
font-weight: 500;
color: #121417;`

export const Button = styled.a`
display: block;
width: 168px;
font-size: 14px;
font-weight: 600px;
text-align: center;
text-decoration: none;
padding: 10px;
background-color: #3470FF;
color: #fff;
border: none;
border-radius: 12px;
cursor: pointer;
&:hover{
    background-color: #0B44CD;
}`
