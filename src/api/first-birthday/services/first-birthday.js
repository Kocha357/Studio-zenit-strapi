'use strict';

/**
 * first-birthday service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::first-birthday.first-birthday');
