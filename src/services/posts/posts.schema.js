// For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, getValidator, querySyntax } from '@feathersjs/schema'
import { dataValidator, queryValidator } from '../../validators.js'


// export const postsSchema = {
//   $id: 'Posts',
//   type: 'object',
//   additionalProperties: false,
//   required: ['id', 'text'],
//   properties: {
//     id: { type: 'number' },
//     text: { type: 'string' }
//   }
// }
// Main data model schema
export const postsSchema = {
  $id: 'Posts',
  type: 'object',
  additionalProperties: false,
  required: ['id','title', 'content', 'date_published', 'description', 'author'],
  properties: {
      id: { type: 'number' },
      title: { type: 'string' },
      content: { type: 'string' },
      date_published: { type: 'string', format: 'date-time' },
      description: { type: 'string' },
      author: { type: 'string' },
  }
}

export const postsValidator = getValidator(postsSchema, dataValidator)
export const postsResolver = resolve({})

export const postsExternalResolver = resolve({})

// Schema for creating new data
export const postsDataSchema = {
  $id: 'PostsData',
  type: 'object',
  additionalProperties: false,
  required: ['title', 'content', 'date_published', 'description', 'author'],
  properties: {
    ...postsSchema.properties
  }
}
export const postsDataValidator = getValidator(postsDataSchema, dataValidator)
export const postsDataResolver = resolve({})

// Schema for updating existing data
export const postsPatchSchema = {
  $id: 'PostsPatch',
  type: 'object',
  additionalProperties: false,
  required: [],
  properties: {
    ...postsSchema.properties
  }
}
export const postsPatchValidator = getValidator(postsPatchSchema, dataValidator)
export const postsPatchResolver = resolve({})

// Schema for allowed query properties
export const postsQuerySchema = {
  $id: 'PostsQuery',
  type: 'object',
  additionalProperties: false,
  properties: {
    ...querySyntax(postsSchema.properties)
  }
}
export const postsQueryValidator = getValidator(postsQuerySchema, queryValidator)
export const postsQueryResolver = resolve({})