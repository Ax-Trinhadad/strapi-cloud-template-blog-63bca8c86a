'use strict';

/**
 * about-who-we-are service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::about-who-we-are.about-who-we-are');
