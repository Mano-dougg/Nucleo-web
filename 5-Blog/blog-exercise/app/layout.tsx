import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import { createClient } from "@/prismicio";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();

  const page = await client.getSingle("logo");

  return {
    title: page.data.site_title || "Blog exercise",
    description: page.data.meta_description || "Blog exercise using Next.js, ShadCN/UI and Prismic",
    openGraph: {
      images: [
        page.data.logo.url || "",
        page.data.blog_image.url || "https://s3-alpha-sig.figma.com/img/b202/83b7/53bbab3d50af4e21355b6c0f235f2bfd?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HLBv-mbxtc8D0MmjQmfRR3FCc1BE97xD2WvL~dKI9fIHQMBxwQvaNgwIpJq9fI3H0KWPA7k4cgKPCGvEIyWhnFDJe5uNammKstRjHktTf5yL2N55RlVi-ARcHr86691l2N5weMONTOO0CbdZM9JCdjB-DSwKA9rvp-uLngi0VEuHy440sSs2lHNW2E80iHIAGeXpLkUWZLHSmG5Sl0El~fQuO9omBp6ybcKduN0i7s1urniECJWmB47W-TEGpUS-weu5Af9t~KYFj3QXn8qnug~YLTtpjKJoLBr6paRNXqo~rafD3zxKAatRg8yJ52XUy2AFxCXCZVi9cGOdVF-o1Q__",
      ],
    },
  }
}
 

export const metadata: Metadata = {
  title: "Blog exercise",
  description: "Blog exercise using Next.js, ShadCN/UI and Prismic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        {children}
      </body>
    </html>
  );
}
