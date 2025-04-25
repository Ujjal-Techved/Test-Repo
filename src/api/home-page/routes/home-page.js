'use strict';

/**
 * home-page router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::home-page.home-page',{
    config: {
        find: {
            middlewares: [
                {
                    name: "api::home-page.home-page-default-populate",
                    config: { type: "find" },
                },
            ],
        },
        findOne: {
            middlewares: [
                {
                    name: "api::home-page.home-page-default-populate",
                    config: { type: "findOne" },
                },
            ],
        },
    },
});
