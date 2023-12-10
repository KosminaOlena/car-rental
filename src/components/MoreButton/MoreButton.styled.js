import { styled } from "styled-components"

export const LoadMore = styled.button`
  padding: 8px 16px;
  margin-top: 100px;
  border: none;
  background-color: transparent;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #3470FF;
  text-decoration: underline;
  cursor: pointer;
  font-family: inherit;
  font-size: 16px;
  line-height: 1.5;
  min-width: 180px;
    &:hover, &:focus{
        color: #0B44CD;
    }`