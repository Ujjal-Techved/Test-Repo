'use strict';

/**
 * about-us router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::about-us.about-us', {
    config: {
        find: {
            middlewares: [
                {
                    name: "api::about-us.about-us-default-populate",
                    config: { type: "find" },
                },
            ],
        },
        findOne: {
            middlewares: [ 
                {
                    name: "api::about-us.about-us-default-populate",
                    config: { type: "findOne" },
                },
            ],
        },
    },
});
