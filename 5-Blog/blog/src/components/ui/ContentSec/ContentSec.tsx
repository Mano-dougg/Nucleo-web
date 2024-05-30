import Buttons from "../Buttons/Buttons";
import Card from "../Card/Card";
import { Content, ContentCards, ContentHead } from "./ContentStyle";

interface ContentProps {
  children: any;
  secNome: string;
  btnLink:string | "link";
}

const ContentSec: React.FC<ContentProps> = ({ children, secNome, btnLink }) => {
  return (
    <Content>
      <ContentCards>
        <ContentHead>
          <span> {secNome}</span>
          <Buttons PlaceHolder={"View All"} classes={"viewAll"} link={btnLink}></Buttons>
        </ContentHead>
        {children}
      </ContentCards>
    </Content>
  );
};

export default ContentSec;
