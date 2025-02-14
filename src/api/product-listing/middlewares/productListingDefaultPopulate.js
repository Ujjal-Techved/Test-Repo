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
          Image: {
            fields: ["url", "alternativeText", "caption", "name"]
          },
          TopSellingProducts: {
            populate: {
              CoverageCard: true,
            }
          },
          PolicyTypes: {
            populate: {
              PolicyList: {
                populate: {
                  Image: {
                    fields: ["url", "alternativeText", "caption", "name"]
                  },
                }
              }
            }
          },
          CoverageOptions: {
            populate: {
              CoverageCard: true,
            }
          },
          CoverageBenefits: {
            populate: {
              BenefitsList: {
                populate: {
                  Image: {
                    fields: ["url", "alternativeText", "caption", "name"]
                  },
                }
              }
            }
          },
          ComparePlans: {
            populate: {
              PlanList: {
                populate: {
                  Image: {
                    fields: ["url", "alternativeText", "caption", "name"]
                  },
                }
              }
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
          Faq_Section: {
            populate: {
              FaqList: true,
            }
          },
        };
      }
    }

    // Continue to the next middleware
    await next();
  };
};
