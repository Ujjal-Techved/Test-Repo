'use strict';

/**
 * career router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::career.career',{
    config: {
        find: {
            middlewares: [
                {
                    name: "api::career.career-default-populate",
                    config: { type: "find" },
                },
            ],
        },
        findOne: {
            middlewares: [
                {
                    name: "api::career.career-default-populate",
                    config: { type: "findOne" },
                },
            ],
        },
    },
});
