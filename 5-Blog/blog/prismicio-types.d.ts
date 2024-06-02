// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Content for Post documents
 */
interface PostDocumentData {
  /**
   * TituloMaior field in *Post*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: post.titulomaior
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  titulomaior: prismic.RichTextField;

  /**
   * Imagem1 field in *Post*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: post.imagem1
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  imagem1: prismic.ImageField<never>;

  /**
   * TituloMenor field in *Post*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: post.titulomenor
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  titulomenor: prismic.RichTextField;

  /**
   * Texto1 field in *Post*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: post.texto1
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  texto1: prismic.RichTextField;

  /**
   * texto2 field in *Post*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: post.texto2
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  texto2: prismic.RichTextField;

  /**
   * imagem2 field in *Post*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: post.imagem2
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  imagem2: prismic.ImageField<never>;

  /**
   * imagem3 field in *Post*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: post.imagem3
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  imagem3: prismic.ImageField<never>;

  /**
   * texto3 field in *Post*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: post.texto3
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  texto3: prismic.RichTextField;
}

/**
 * Post document from Prismic
 *
 * - **API ID**: `post`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PostDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PostDocumentData>, "post", Lang>;

export type AllDocumentTypes = PostDocument;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type { PostDocument, PostDocumentData, AllDocumentTypes };
  }
}
