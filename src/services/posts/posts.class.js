import { KnexService } from '@feathersjs/knex'

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class PostsService extends KnexService {
  async find(params){
    console.log(params.query)
    params.query = {
      ...params.query,
      $select: ['id','title','description','created_at','updated_at'],
      $limit: params.query.$limit || 20,
      $skip: params.query.$skip,
      $sort: {updated_at: -1}
    }
    return super.find(params);
  }
}
export const getOptions = (app) => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('postgresqlClient'),
    name: 'posts'
  }
}
