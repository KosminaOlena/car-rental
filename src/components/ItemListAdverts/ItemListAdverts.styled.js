import styled from 'styled-components'

export const Item =styled.li`
display: flex;
flex-direction: column;
width: 274px;
`

export const Button = styled.button`
height: 44px;
width: 100%;
font-size: 13px;
background-color: #3470FF;
color: #fff;
border: none;
border-radius: 12px;
cursor: pointer;
&:hover{
    background-color: #0B44CD;
}`

export const Image = styled.img`
height: 268px;
border-radius: 14px;
object-fit: cover;
`
export const Title = styled.h2`
display: flex;
justify-content: space-between;
font-size: 16px;
line-height: 1.5;
color: #121417;`

export const Span = styled.span`
color: #3470FF;`

export const Desc = styled.p`
font-size: 12px;
font-weight: 1.5;
color: rgba(18, 20, 23, 0.5)`