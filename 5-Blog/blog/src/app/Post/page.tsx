import { Metadata } from 'next';
import Link from 'next/link'


export const metadata: Metadata = {
    title: "Post",
    icons: {
      icon: "/favicon.png",
    },
  };
  
function Post(){
    return(
        <>
        <h1>Post</h1>
        <Link href="/">VoltarA</Link>
        </>
    )
}

export default Post