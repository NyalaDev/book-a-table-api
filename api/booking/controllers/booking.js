const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  async create(ctx) {
    const {
      state: { user },
      request: { body },
    } = ctx;

    const restaurant = await strapi.services.restaurant.findOne({
      id: body.restaurant,
    });

    if (!restaurant) {
      return ctx.notFound('Invalid restaurant.');
    }

    const table = await strapi.services.table.findOne({
      id: body.table,
      restaurant: restaurant.id,
    });
    if (!table) {
      return ctx.notFound('Invalid table.');
    }

    if (!table.available) {
      return {
        error: true,
        message: 'Table is not available',
      };
    }

    const bookingDate = body.bookingDate || new Date();

    const booking = {
      ...body,
      bookingDate,
      customer: user.id,
    };

    const entity = await strapi.services.booking.create(booking);
    await strapi.services.table.update({ id: table.id }, { available: false });

    return sanitizeEntity(entity, { model: strapi.models.booking });
  },
  async delete(ctx) {
    const { id } = ctx.params;
    const booking = await strapi.services.booking.findOne({ id });
    await strapi.services.booking.delete({ id });
    const { table } = booking;
    await strapi.services.table.update({ id: table.id }, { available: true });
    return sanitizeEntity(booking, { model: strapi.models.booking });
  },
};
