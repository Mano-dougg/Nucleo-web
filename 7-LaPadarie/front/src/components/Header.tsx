import Image from 'next/image';
import { styled } from 'styled-components';
import logoLapad from '@/assets/logoLapad.svg';

const HeaderStyle = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 2rem;
`

//-- FUNCTION
 const Header: React.FC = () => {

  return (
    <HeaderStyle>

      <Image src={logoLapad} alt="." />
      
    </HeaderStyle>
  );
};

export default Header;