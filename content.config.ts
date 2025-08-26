import { defineCollection, z } from '@nuxt/content'
import { asSeoCollection } from '@nuxtjs/seo/content'

const commonContentSchema = z.object({
  title: z.string().nonempty(),
  description: z.string().nonempty(),
  date: z.string().nonempty(),
})

const commonArticleSchema = z.object({
  title: z.string().nonempty(),
  description: z.string().nonempty(),
  date: z.string().nonempty(),
  image: z.string().url(),
  readingTime: z.string().nonempty(),
  tags: z.array(z.string().nonempty()),
})

export const collections = {
  content_en: defineCollection(
    asSeoCollection({
      type: 'page',
      source: {
        include: 'en/**/*.md',
        exclude: [],
        prefix: '/en',
      },
      schema: commonContentSchema,
    }),
  ),
  content_fr: defineCollection(
    asSeoCollection({
      type: 'page',
      source: {
        include: 'fr/**/*.md',
        exclude: ['fr/articles/*.md'],
        prefix: '/fr',
      },
      schema: commonContentSchema,
    }),
  ),
  articles_en_test: defineCollection(
    asSeoCollection({
      type: 'page',
      source: {
        include: 'en/articles/test/*.md',
        prefix: '/en/articles/test',
      },
      schema: commonArticleSchema,
    }),
  ),
  articles_en: defineCollection(
    asSeoCollection({
      type: 'page',
      source: {
        include: 'en/articles/*.md',
        prefix: '/en/articles',
      },
      schema: commonArticleSchema,
    }),
  ),
  articles_fr: defineCollection(
    asSeoCollection({
      type: 'page',
      source: {
        include: 'fr/articles/*.md',
        prefix: '/fr/articles',
      },
      schema: commonArticleSchema,
    }),
  ),
}
