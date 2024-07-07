export async function deleteProduct( id: number) {
    try {
      const response = await fetch(`http://localhost:3001/product/${id}`, {
        method: "DELETE",
        cache: "no-store",
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      console.log(err);
    }
  }
  