import { createClient } from "@/prismicio";
import React, { createContext } from 'react';
import Header from "./Header/Header";
import PostsRecentes from "./PostsRecentes/PostsRecentes";
import Footer from "./Footer/Footer";
import Home from "./Home/home";

export default async function Component() {
	const prismicClient = createClient();
	const posts = await prismicClient.getAllByType("blog_post").catch(e => {
		console.error(e);
		return [];
	});

  return (
		<>
			<Header />
			<Home />
			<PostsRecentes />

			<Footer />

		</>
	);
	
}
