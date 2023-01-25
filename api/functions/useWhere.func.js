/* eslint-disable no-param-reassign */
const Sequelize = require('sequelize');

const { Op } = Sequelize;
const OPTIONS = require('../objects/options.obj');

module.exports = req => {
  const { MODEL } = req.params;
  const { attributes, include } = OPTIONS[MODEL];
  const { by, sort, offset, limit, ...cols } = req.query;
  const andColumns = {};

  if (!cols) return null;

  Object.entries(cols).forEach(and => {
    const [col, val] = and;

    const found = attributes.find(column => column === col);
    if (found) andColumns[col] = { [Op.like]: `%${val}%` };

    if (include) {
      include.forEach(model => {
        const foundModel = model.attributes.some(column => column === col);

        if (foundModel) {
          model.where = { [col]: { [Op.like]: `%${val}%` } }; // #1
          model.required = true; // #1
        }
      });
    }
  });

  return {
    [Op.and]: andColumns,
  };
};

/*
  Examples:

  1) This endpoint fetches both Pearl Jam "Oceans" and Lighthouse Family "Ocean Drive" tracks:
  BASE_URL/tracks?track=ocean

  2) This one fetches the same as the previous one but sorted by artist in descending order:
  BASE_URL/tracks?by=artist&sort=DESC&track=ocean

  3) The following endpoint fetches only Pearl Jam "Oceans":
  BASE_URL/tracks?track=ocean&artist=jam

  4) This last endpoint fetches only Lighthouse Family "Ocean Drive":
  BASE_URL/tracks?track=ocean&artist=fam
*/

/*
    #1 Check about "options.include[].where" and "options.include[].required":
    https://sequelize.org/v5/class/lib/model.js~Model.html#static-method-findAll
*/
