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
          "SecondaryDescription",
        ];
      }

      // Populate all nested components 
      if (!ctx.query.populate) {
        ctx.query.populate = {
          Image: {
            fields: ["url", "alternativeText", "caption", "name"]
          },
          InfoStrip: {
            populate: {
              Image: {
                fields: ["url", "alternativeText", "caption", "name"]
              },
            }
          },
          OurJourney: {
            populate: {
              JourneyCards: {
                populate: {
                  Image: {
                    fields: ["url", "alternativeText", "caption", "name"]
                  },
                  YearList: true,
                }
              }
            }
          },
          Partners: {
            populate: {
              CenterImage: {
                fields: ["url", "alternativeText", "caption", "name"]
              },
              PartnerCards: {
                populate: {
                  Image: {
                    fields: ["url", "alternativeText", "caption", "name"]
                  },
                }
              }
            }
          },
          Principles: {
            populate: {
              PrincipleCard: {
                populate: {
                  PrincipleList: {
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
          LeadersSection: {
            populate: {
              LeadersList: {
                populate: {
                  Image: {
                    fields: ["url", "alternativeText", "caption", "name"]
                  },
                }
              }
            }
          },
          Reports: {
            populate: {
              ReportItems: {
                populate: {
                  Image: {
                    fields: ["url", "alternativeText", "caption", "name"]
                  },
                }
              }
            }
          },
          Awards: {
            populate: {
              AwardsList: {
                populate: {
                  Image: {
                    fields: ["url", "alternativeText", "caption", "name"]
                  },
                }
              }
            }
          },
          MediaCenter: {
            populate: {
              MediaCard: {
                populate: {
                  Image: {
                    fields: ["url", "alternativeText", "caption", "name"]
                  },
                }
              }
            }
          },
          HelpingPeople: {
            populate: {
              CornerImage: {
                fields: ["url", "alternativeText", "caption", "name"]
              },
              CornerImageMobile: {
                fields: ["url", "alternativeText", "caption", "name"]
              },
              ImageDesktop: {
                fields: ["url", "alternativeText", "caption", "name"]
              },
              ImageMobile: {
                fields: ["url", "alternativeText", "caption", "name"]
              },
              FeatureList: {
                populate: {
                  Image: {
                    fields: ["url", "alternativeText", "caption", "name"]
                  },
                }
              }
            }
          },
          SeoSection: {
            populate: {
              SchemaTag: true,
            }
          },
        };
      }
    }

    // Continue to the next middleware
    await next();
  };
};
