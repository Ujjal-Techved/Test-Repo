'use strict';

/**
 * contact-us router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::contact-us.contact-us',{
    config: {
        find: {
            middlewares: [
                {
                    name: "api::contact-us.contact-us-default-populate",
                    config: { type: "find" },
                },
            ],
        },
        findOne: {
            middlewares: [
                {
                    name: "api::contact-us.contact-us-default-populate",
                    config: { type: "findOne" },
                },
            ],
        },
    },
});
