'use strict';

/**
 * branch-list service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::branch-list.branch-list');
