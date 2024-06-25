import styled from 'styled-components';

const FooterStyle = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  height: min-content;
  margin-bottom: 2rem;
`

 const Footer: React.FC = () => {
  return (
    <FooterStyle>

      Com 💛 Info Jr UFBA 2024
      
    </FooterStyle>
  );
};

export default Footer;