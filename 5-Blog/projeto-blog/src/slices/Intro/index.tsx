import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import './index.css';

const components: JSXMapSerializer ={
  // heading1:({children}) => (<h1 className="intro-heading"> {children}</h1>),
  // heading2:({children}) => (<h2> {children}</h2>),
  // paragraph:({children}) => <p> {children}</p>
}

export type IntroProps = SliceComponentProps<Content.IntroSlice>;

const Intro = ({ slice }: IntroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="home-intro"
    >

      <PrismicRichText 
      field={slice.primary.heading}
      components={components} />

      <div className="intro-body">

      <section>
          <PrismicRichText field={slice.primary.title} 
          components={components}/>

          <PrismicRichText field={slice.primary.body} 
          components={components}/>
      </section>

        <PrismicNextImage field={slice.primary.image} className="intro-img"/>
        
      </div>
    </section>
  );
};

export default Intro;

{/* <section>
<PrismicRichText field={slice.primary.title} 
components={{
  heading2:({children}) => <h2> {children}</h2>
}}/>

<PrismicRichText field={slice.primary.body} 
components={{
  paragraph:({children}) => <p> {children}</p>
}}/>
</section> */}

{/* <PrismicRichText 
field={slice.primary.heading}
components={{
  heading1:({children}) => <h1 className="intro-heading"> {children}</h1>
}} /> */}