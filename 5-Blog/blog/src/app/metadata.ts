import { createClient } from "@/prismicio";
import { Metadata } from "next";



export async function generateMetadata(): Promise<Metadata> {
    const client = createClient()
    const settings = await client.getSingle('home')
  
    return {
      title: settings.data.site_title|| "título errado",
      description: settings.data.meta_desc,
      openGraph: {
        images: [settings.data.meta_image.url || ""]
      }
    }
  }
  