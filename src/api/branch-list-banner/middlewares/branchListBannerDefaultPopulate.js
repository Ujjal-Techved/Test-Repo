"use strict";

/**
 * `manageNestedFieldsMiddleware` middleware
 */

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    if (config.type === "find" || config.type === "findOne") {
      // Default fields for the main schema
      if (!ctx.query.fields) {
        ctx.query.fields = [
          "id",
          "Title",
          "SubTitle",
          "ReachUsTitle",
          "ReachUsSubTitle",
          "createdAt",
        ];
      }

      // Populate all nested components 
      if (!ctx.query.populate) {
        ctx.query.populate = {
            InfoCards :{
                populate:{
                    PointerList:true
                }
            },
            ReachUsCards :{
            populate:{
              Image:{
                fields:["url", "alternativeText", "caption", "name"]
              },
            }
          },
        };
      }
    }

    // Continue to the next middleware
    await next();
  };
};
