// cms/schemaTypes/post.js
import { defineType, defineField } from "sanity";

export default defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      description:
        "High-level bucket shown in filters (e.g. Injury Rehab, Strength & Conditioning, Athlete Training, Nutrition).",
    }),
    defineField({
      name: "tag",
      title: "Tag",
      type: "string",
      description: "Short label like Fueling, Clinic Tips, In-Season, etc.",
    }),
    defineField({
      name: "readTime",
      title: "Read time label",
      type: "string",
      description: 'Label such as "5 min read".',
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      description: "Short teaser that appears on cards.",
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});
