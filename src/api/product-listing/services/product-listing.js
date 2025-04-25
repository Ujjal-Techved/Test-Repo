'use strict';

/**
 * product-listing service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::product-listing.product-listing');
