import img from '../assets/Vector.svg'

function SideImg() {
    
  return (
    <div style={{padding:'2rem 4rem', position: 'absolute'}} className="side-img">
      <img src={img} alt="side-img" />
    </div>
  );
}

export default SideImg;