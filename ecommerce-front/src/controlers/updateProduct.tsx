export async function updateProduct(data: any, id: number) {
  try {
    const response = await fetch(`http://localhost:3001/product/${id}`, {
      method: "PUT",
      cache: "no-store",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  } catch (err) {
    console.log(err);
  }
}
