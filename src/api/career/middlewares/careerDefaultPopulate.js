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
          JobRoleList: true,
          BannerStats: {
            populate: {
              Image: {
                fields: ["url", "alternativeText", "caption", "name"]
              },
            }
          },
          JoinCulture: {
            populate: {
              FeatureList: {
                populate: {
                  Image: {
                    fields: ["url", "alternativeText", "caption", "name"]
                  },
                }
              },
              SliderSection: {
                populate: {
                  Image: {
                    fields: ["url", "alternativeText", "caption", "name"]
                  },
                }
              },
            }
          },
          ValueSection: {
            populate: {
              ValueCards: {
                populate: {
                  Image: {
                    fields: ["url", "alternativeText", "caption", "name"]
                  },
                }
              },
            }
          },
          SendApplication: true,
          Benefits: {
            populate: {
              BenefitsCards: {
                populate: {
                  Image: {
                    fields: ["url", "alternativeText", "caption", "name"]
                  },
                }
              },
            }
          },
          ReviewSection: {
            populate: {
              ReviewCards: {
                populate: {
                  Image: {
                    fields: ["url", "alternativeText", "caption", "name"]
                  },
                }
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
