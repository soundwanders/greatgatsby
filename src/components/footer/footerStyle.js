export const Footer = styled.footer`
    display: block;
    position: fixed;
    bottom: 0;
    margin: 0 auto;
    width: 100%;
    maxWidth: 100%;
    padding: 0 auto;
    textAlign: center;
    marginTop: 1rem;
    background: #037fb7;
    color: #fff;
`

export const Flex = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  
  @media (max-width: 680px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  a {
    margin: 0 0.5rem;
    img {
      margin: 0;
    }
    &:first-child,
    &:last-child {
      margin: 0;
    }
  }
`;