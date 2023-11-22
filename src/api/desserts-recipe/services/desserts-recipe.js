'use strict';

/**
 * desserts-recipe service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::desserts-recipe.desserts-recipe');
