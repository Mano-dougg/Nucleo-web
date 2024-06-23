import Topo from "../components/Topo/topo";
import Base from "../components/Base/base"
import Lista from "../components/Lista/lista";
import './page.css'


export default function Home() {
  return (
   <div className="main">
    

    <Topo />

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas 
      vehicula ornare dui, at placerat sem. Nulla eu odio in tortor aliquam 
      rutrum eget ut neque. Pellentesque auctor et justo eu posuere. Donec 
      ante odio, tempor non velit in, vestibulum dignissim lectus. Vivamus 
      vestibulum est in sem blandit, ut vulputate turpis finibus. Curabitur 
      eleifend nibh placerat nisl euismod placerat. Fusce erat sapien, tempus 
      quis ultrices nec, egestas quis velit. Nulla ullamcorper justo metus, ut 
      consequat risus ullamcorper nec. Aenean in justo id lectus cursus consectetur. 
      Curabitur hendrerit risus sed mattis blandit. Sed eget ligula orci. Phasellus 
      in porttitor velit. Cras ac mi pharetra, sollicitudin urna nec, viverra dolor. 
      Nunc elementum lorem a eros sollicitudin pellentesque.
    </p>


    <p>Carrossel</p>

    <Lista />

    <Base />

   </div>
  );
}
