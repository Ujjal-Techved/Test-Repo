'use strict';

/**
 * branch-list router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::branch-list.branch-list', {
    config: {
        find: {
            middlewares: [
                {
                    name: "api::branch-list.branch-list-default-populate",
                    config: { type: "find" },
                },
            ],
        },
        findOne: {
            middlewares: [
                {
                    name: "api::branch-list.branch-list-default-populate",
                    config: { type: "findOne" },
                },
            ],
        },
    },
});