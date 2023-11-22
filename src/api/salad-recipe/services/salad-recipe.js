'use strict';

/**
 * salad-recipe service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::salad-recipe.salad-recipe');
