import { posts } from './posts/posts.js'

export const services = (app) => {
  app.configure(posts)

  // All services will be registered here
}
