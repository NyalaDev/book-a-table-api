const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

module.exports = {
  async create(ctx) {
    let entity;
    if (ctx.is('multipart')) {
      const { data, files } = parseMultipartData(ctx);
      data.owner = ctx.state.user.id;
      entity = await strapi.services.restaurant.create(data, { files });
    } else {
      ctx.request.body.owner = ctx.state.user.id;
      entity = await strapi.services.restaurant.create(ctx.request.body);
    }
    return sanitizeEntity(entity, { model: strapi.models.restaurant });
  },
  async update(ctx) {
    const { id } = ctx.params;
    const restaurant = await strapi.services.restaurant.findOne({
      id: ctx.params.id,
      'owner.id': ctx.state.user.id,
    });
    if (!restaurant) {
      return ctx.unauthorized("You can't update this entry");
    }
    const entity = await strapi.services.restaurant.update(
      { id },
      ctx.request.body,
    );
    return sanitizeEntity(entity, { model: strapi.models.restaurant });
  },
  async delete(ctx) {
    const { id } = ctx.params;
    const restaurant = await strapi.services.restaurant.findOne({
      id: ctx.params.id,
      'owner.id': ctx.state.user.id,
    });
    if (!restaurant) {
      return ctx.unauthorized("You can't delete this entry");
    }
    const entity = await strapi.services.restaurant.delete({ id });
    return {
      deleted: true,
      restaurant: sanitizeEntity(entity, { model: strapi.models.restaurant }),
    };
  },
};
