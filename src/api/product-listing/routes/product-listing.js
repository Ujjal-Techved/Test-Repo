'use strict';

/**
 * product-listing router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::product-listing.product-listing',{
    config: {
        find: {
            middlewares: [
                {
                    name: "api::product-listing.product-listing-default-populate",
                    config: { type: "find" },
                },
            ],
        },
        findOne: {
            middlewares: [
                {
                    name: "api::product-listing.product-listing-default-populate",
                    config: { type: "findOne" },
                },
            ],
        },
    },
});
