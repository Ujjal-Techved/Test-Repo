"use strict";

/**
 * `manageNestedFieldsMiddleware` middleware
 */

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    if (config.type === "find" || config.type === "findOne") {
      // Default fields for the main schema (content cta)
      if (!ctx.query.fields) {
        ctx.query.fields = [
          "id",
          "Branch_Name",
          "Branch_Address",
          "Phone_Number",
          "City",
          "State",
          "createdAt",
        ];
      }

      // Populate all nested components
      if (!ctx.query.populate) {
        ctx.query.populate = {
        };
      }
    }

    // Continue to the next middleware
    await next();
  };
};
