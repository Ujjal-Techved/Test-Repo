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
          "Title",
          "Description",
        ];
      }

      // Populate all nested components 
      if (!ctx.query.populate) {
        ctx.query.populate = {
          WhatStage: {
            populate: {
              CardList: {
                populate: {
                  Image: {
                    fields: ["url", "alternativeText", "caption", "name"]
                  },
                }
              }
            }
          },
          LifeInsurance: {
            populate: {
              FeatureList: {
                populate: {
                  Image: {
                    fields: ["url", "alternativeText", "caption", "name"]
                  },
                }
              }
            }
          },
          WhatIs: true,
          WhyLife: {
            populate: {
              Image: {
                fields: ["url", "alternativeText", "caption", "name"]
              },
            }
          },
          ChooseGoal: {
            populate: {
              CardList: {
                populate: {
                  Image: {
                    fields: ["url", "alternativeText", "caption", "name"]
                  },
                }
              }
            }
          },
          TypeInsurance: {
            populate: {
              CardList: {
                populate: {
                  Image: {
                    fields: ["url", "alternativeText", "caption", "name"]
                  },
                }
              }
            }
          },
          CallBack: true,
          CoverageOptions: {
            populate: {
              CoverageCard: true,
            }
          },
          StartProtecting: {
            populate: {
              StartProtectingCard: {
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
          Faq_Section: {
            populate: {
              FaqList: true,
            }
          },
          IrdaSection: {
            populate: {
              Image: {
                fields: ["url", "alternativeText", "caption", "name"]
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
