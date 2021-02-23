const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  async create(ctx) {
    const {
      state: { user },
      request: { body },
    } = ctx;

    if (!body.restaurant) {
      return ctx.response.badRequest({
        message: 'ValidationError',
        data: {
          errors: {
            restaurant: ['restaurant must be defined.'],
          },
        },
      });
    }

    const exists = await strapi.services.table.findOne({
      identifier: body.identifier,
      restaurant: body.restaurant,
    });

    if (exists) {
      return ctx.response.badRequest({
        message: 'ValidationError',
        data: {
          errors: {
            identifier: ['Table identifier already taken'],
          },
        },
      });
    }

    const restaurant = await strapi.services.restaurant.findOne({
      id: body.restaurant,
      'owner.id': user.id,
    });

    if (!restaurant) {
      return ctx.response.notFound('Invalid restaurant');
    }

    const entity = await strapi.services.table.create(body);
    return sanitizeEntity(entity, { model: strapi.models.table });
  },
  async update(ctx) {
    const {
      params: { id },
      request: { body },
    } = ctx;

    const exists = await strapi.services.table.findOne({
      identifier: body.identifier,
      restaurant: body.restaurant,
    });

    if (exists && exists.id !== Number(id)) {
      return ctx.response.badRequest({
        message: 'ValidationError',
        data: {
          errors: {
            identifier: ['Table identifier already taken'],
          },
        },
      });
    }

    const entity = await strapi.services.table.update({ id }, ctx.request.body);
    return sanitizeEntity(entity, { model: strapi.models.table });
  },
};
