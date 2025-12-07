// cms/schemaTypes/membershipPlan.js
import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'membershipPlan',
  title: 'Membership Plan',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Plan Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'E.g. Adult, Youth, Team, etc.',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Monthly price (numeric, no $ sign).',
    }),
    defineField({
      name: 'billingPeriod',
      title: 'Billing Period',
      type: 'string',
      description: 'E.g. "per month", "per session".',
    }),
    defineField({
      name: 'highlight',
      title: 'Highlight Tag',
      type: 'string',
      description: 'E.g. "Most Popular", "Best for Athletes".',
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Bullet points in the plan card.',
    }),
    defineField({
      name: 'isPopular',
      title: 'Mark as Popular',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Controls the order of plans in the UI.',
    }),
  ],
})
