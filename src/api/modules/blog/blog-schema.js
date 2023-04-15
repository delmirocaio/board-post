const { celebrate, Joi, Segments } = require("celebrate");

module.exports = {
  getAllValidate: celebrate({
    [Segments.QUERY]: {
      id_user: Joi.string().allow('').optional(),
      adminCode: Joi.string().required(),
    },
  }),

  createPostValidate: celebrate({
    [Segments.BODY]: {
      title: Joi.string().required(),
      description: Joi.string().required(),
    },
    [Segments.HEADERS]: {
      id_user: Joi.string().required(),
    }
  }, { allowUnknown: true }),

  deletePostValidate: celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required()
    }
  })
};
