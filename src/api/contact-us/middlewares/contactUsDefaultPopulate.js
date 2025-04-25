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
          "PageUrl",
          "PageTitle",
          "PageDesc",
        ];
      }

      // Populate all nested components 
      if (!ctx.query.populate) {
        ctx.query.populate = {
          Contact_Details_Cards: {
            populate: {
              Image: {
                fields: ["url", "alternativeText", "caption", "name"]
              },
            }
          },
          VisitUs: {
            populate: {
              Image: {
                fields: ["url", "alternativeText", "caption", "name"]
              },
            }
          },
          CustomerService: {
            populate: {
              CategoryList: {
                populate: {
                  Image: {
                    fields: ["url", "alternativeText", "caption", "name"]
                  },
                  ListItem: true,
                }
              }
            }
          },
          AppLink: {
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
          Faqs: {
            populate: {
              FaqList: true,
            }
          }
        };
      }
    }

    // Continue to the next middleware
    await next();
  };
};
