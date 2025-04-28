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
          CustomerService: {
            populate: {
              CategoryList: {
                populate: {
                  Image: {
                    fields: ["url", "alternativeText", "caption", "name"]
                  },
                  ListItem: true,
                }
              },
            }
          },
          ConnectUs: {
            populate: {
              ConnectUsCards: {
                populate: {
                  Image: {
                    fields: ["url", "alternativeText", "caption", "name"]
                  },
                  QRImage: {
                    fields: ["url", "alternativeText", "caption", "name"]
                  },
                }
              }
            }
          },
          ReachOutSection: {
            populate: {
              TabList: {
                populate: {
                  ReachUsCards: {
                    populate: {
                      Image: {
                        fields: ["url", "alternativeText", "caption", "name"]
                      },
                    }
                  }
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
