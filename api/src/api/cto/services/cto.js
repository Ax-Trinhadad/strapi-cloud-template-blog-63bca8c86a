'use strict';

/**
 * cto service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cto.cto');
