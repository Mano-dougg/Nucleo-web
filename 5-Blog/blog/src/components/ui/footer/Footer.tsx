import { FooterContainer, FooterForm, InputContainer, PersonContainer } from "./footerStyle";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterForm>
        <h1>Receba um Email sempre que houver novidades</h1>
        <p>
          A bi-weekly newsletter of design inspiration, resources and anything
          related to career development.
        </p>

        <InputContainer>
            <input type="email" name="" placeholder="Email adress" />
            <button>Subscribe</button>
        </InputContainer>
      </FooterForm>
      <PersonContainer>
        Desenvolvido por Jaedson
      </PersonContainer>
    </FooterContainer>
  );
};

export default Footer;
