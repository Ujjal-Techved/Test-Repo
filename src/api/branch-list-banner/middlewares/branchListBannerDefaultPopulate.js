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
          InfoCards: true,
          ReachUsCards: {
            populate: {
              Image: {
                fields: ["url", "alternativeText", "caption", "name"]
              },
              QRImage: {
                fields: ["url", "alternativeText", "caption", "name"]
              },
            }
          },

          BottomBanner: {
            populate: {
              QR_Code_Image: {
                fields: ["url", "alternativeText", "caption", "name"]
              },
              PlayStore_Image: {
                fields: ["url", "alternativeText", "caption", "name"]
              },
              AppStore_Image: {
                fields: ["url", "alternativeText", "caption", "name"]
              },
            }
          },
          SeoSection: {
            populate: {
              SchemaTag: true,
            }
          }

        };
      }
    }

    // Continue to the next middleware
    await next();
  };
};
