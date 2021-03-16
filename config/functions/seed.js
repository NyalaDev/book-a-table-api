const faker = require('faker');

const dropAllData = async () => {
  await strapi.plugins['users-permissions'].services.user.removeAll();
  await strapi.services.restaurant.delete();
  await strapi.services.booking.delete();
  await strapi.services.table.delete();
};

/**
 * Create random users
 * @param {number} numberOfUsers Number of users to be created, default is 5
 * @returns
 */
const createUsers = (numberOfUsers = 5) =>
  Array(numberOfUsers)
    .fill(null)
    .map(() => {
      const email = faker.internet.email();
      return strapi.plugins['users-permissions'].services.user.add({
        username: email,
        email,
        provider: 'local',
        password: faker.internet.password(),
        confirmed: true,
        firstname: faker.name.firstName(),
        lastname: faker.name.lastName(),
      });
    });

/**
 * Create restaurants
 * @param {object} owner Owner of the resutart (user enity)
 * @param {number} numberOfRestaurants Number of restauratns to be created for this specific owner
 * @returns
 */
const createRestaurants = (owner, numberOfRestaurants = 3) =>
  Array(numberOfRestaurants)
    .fill(null)
    .map(() =>
      strapi.services.restaurant.create({
        name: faker.company.companyName(),
        description: faker.lorem.paragraphs(),
        address: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.country()}`,
        owner,
      }),
    );

/**
 * Create table restaurants
 * @param {object} restaurant Restaurant entity
 * @param {number} numberOfTables Number of tables to be created
 * @returns
 */
const createRestaurantTables = (restaurant, numberOfTables = 3) =>
  Array(numberOfTables)
    .fill(null)
    .map(() =>
      strapi.services.table.create({
        identifier: `table-${faker.random.number()}`,
        capacity: faker.random.number({ min: 1, max: 10 }),
        description: faker.lorem.paragraphs(),
        available: true,
        restaurant,
      }),
    );

const dataSeed = async () => {
  const count = await strapi.services.restaurant.count({});
  if (count !== 0) return;

  await dropAllData();

  const users = await Promise.all(createUsers());

  users.forEach(async user => {
    const userRestaurants = await Promise.all(createRestaurants(user));
    userRestaurants.forEach(restaurant =>
      Promise.all(createRestaurantTables(restaurant)),
    );
  });
};

module.exports = {
  dataSeed,
};
