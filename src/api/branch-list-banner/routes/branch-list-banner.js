'use strict';

/**
 * branch-list-banner router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::branch-list-banner.branch-list-banner', {
    config: {
        find: {
            middlewares: [
                {
                    name: "api::branch-list-banner.branch-list-banner-default-populate",
                    config: { type: "find" },
                },
            ],
        },
        findOne: {
            middlewares: [
                {
                    name: "api::branch-list-banner.branch-list-banner-default-populate",
                    config: { type: "findOne" },
                },
            ],
        },
    },
});

