const Joi = require('joi');

module.exports = {
  validateBody: (schema) => {
    return (req, res, next) => {
      const result = Joi.validate(req.body, schema);
      if (result.error) {
        return res.status(403).json(result.error);
      }

      if (!req.value) { req.value = {}; }
      req.value['body'] = result.value;
      next();
    }
  },

  schemas: {
    signupSchema: Joi.object().keys({
      email: Joi.string().email().required(),
      photoURL: Joi.string().allow('').optional(),
      displayName: Joi.string().required(),
      uid: Joi.string().allow('').optional()
    })
  }
}
