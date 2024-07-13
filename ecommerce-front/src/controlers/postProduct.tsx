export async function postproduct(data:any){
    try {
        const response = await fetch("http://localhost:3001/product", {
          method: "POST",
          cache: "no-store",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
      
       
      } catch (err) {
       console.log(err)
      }
}