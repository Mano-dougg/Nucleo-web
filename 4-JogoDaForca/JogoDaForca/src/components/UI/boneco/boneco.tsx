

const Cabeca =(
   <div style={{
    width: "63px",
    height:" 63px",
    borderRadius: "50%",
    border: "10px solid #0a3871",
    position: "absolute",
    top: "40px",
    right: "105px"
   }}/>
)
const Corpo =(
   <div style={{
    width: "13px",
    height:" 140px",
    background:"#0a3871",
    position: "absolute",
    top: "100px",
    right: "130px"
   }}/>
)

const Braco1 =(
    <div style={{
     width: "90px",
     height:" 10px",
     background:"#0a3871",
     position: "absolute",
     top: "150px",
     right: "120px",
     rotate: "-30deg",
     transformOrigin:"left bottom"
    }}/>
 )
const Braco2 =(
    <div style={{
     width: "90px",
     height:" 10px",
     background:"#0a3871",
     position: "absolute",
     top: "150px",
     right: "60px",
     rotate: "30deg",
     transformOrigin:"right bottom"
    }}/>
 )

const Perna1 =(
    <div style={{
     width: "100px",
     height:" 10px",
     background:"#0a3871",
     position: "absolute",
     top: "230px",
     right: "38px",
     rotate: "60deg",
     transformOrigin:"left bottom"
    }}/>
 )
const Perna2 =(
    <div style={{
     width: "100px",
     height:" 10px",
     background:"#0a3871",
     position: "absolute",
     top: "230px",
     right: "135px",
     rotate: "-60deg",
     transformOrigin:"right bottom"
    }}/>
 )

const partesCorpo = [Cabeca, Corpo, Braco1, Braco2, Perna1, Perna2]
   
interface bonecoProps{
    numeroDeErros:number
}

export const Boneco:React.FC<bonecoProps> = ({numeroDeErros}) => {
  return (
    <div style={{ position: "relative", width:"400px"}}>
        {partesCorpo.slice(0, numeroDeErros)}
          <div style={{
             height:"50px",
             width:"10px",
             background:"#0a3871",
             marginLeft:"120px",
             position:"absolute",
             top:0,
             right:"130px"
        }}/>
        <div style={{
             height:"10px",
             width:"150px",
             background:"#0a3871",
             marginLeft:"120px"
        }}/>
        <div style={{
            height:"300px",
            width:"10px",
            background:"#0a3871",
            marginLeft:"120px"
        }}/>
     
    </div>
  );
};
