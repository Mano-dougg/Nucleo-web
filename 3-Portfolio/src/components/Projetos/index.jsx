// -- ASSETS 
import cartaz from '../../assets/ImagePlaceholder.jpg/';
import projeto1 from '../../assets/projeto-adv.png/';
// -- COMPONENTS
import Card from '../Card/index.jsx/';

// -- FUNCTION
function Projetos() {

  return (
    <div id='projetos'>

      <hr/>

      <h2>Projetos</h2>
      <p>Aqui estão alguns dos meus projetos</p>

      <Card imagem={projeto1} nome={'Projeto 1'} texto={'Protótipo de sistema de gestão interna desenvolvido para um escritório de advocacia de Salvador no curso de "Design Thinking" do Tomorrow UFBA.'} link={'https://www.figma.com/proto/bMdOTJ9tmf36t7eLjqeBfd/Case-Jur%C3%ADdico?node-id=1-701&t=b4AvHI0VqmL8KoY9-1&scaling=scale-down&page-id=1%3A379'} />

      <Card tipo={'reverso'} imagem={cartaz} nome={'Projeto 2'} texto={'Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.'} />      

    </div>
  );
};

export default Projetos;