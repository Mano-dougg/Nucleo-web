import { RichTextField } from '@prismicio/client';
import { JSXMapSerializer, PrismicRichText, PrismicLink } from '@prismicio/react';

export const richTextComponents: JSXMapSerializer = {
  label: ({ node, children }) => {
    if (node.data.label === 'codespan') {
      return <code>{children}</code>;
    }
  },
  heading1: ({ children }) => (
    <h1
      className={`text-center font-bold mb-8 text-4xl sm:text-6xl text-green-950 dark:text-foreground`} >{children}</h1>
  ),
  heading2: ({ children }) => <h2 className="font-bold text-xl text-center sm:text-4xl text-green-950 dark:text-foreground">{children}</h2>,
  heading3: ({ children }) => <h3 className="font-bold text-lg text-green-950 dark:text-foreground">{children}</h3>,
  paragraph: ({ children }) => <p className="text-sm sm:text-lg text-foreground">{children}</p>,
  hyperlink: ({ children, node }) => (
    <PrismicLink field={node.data} className="font-bold underline">{children}</PrismicLink>
  ),
};

interface RichTextProps {
  field: RichTextField;
}

export const RichText = ({ field }: RichTextProps) => {
  return <PrismicRichText field={field} components={richTextComponents} />;
};