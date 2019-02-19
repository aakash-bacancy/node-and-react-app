const db = require('../models/index.js');

// eslint-disable-next-line prefer-destructuring
const categories = db.Categories;
exports.createNewCategory = async function(req, res) {
  let data;
  try {
    data = await categories.create({
      categoryName: req.body.categoryName,
      status: req.body.status,
    });
  } catch (err){
    res.status(500).json({
      status: false,
      message: 'Unable to save in database',
      data: err,
    });
  }
  if (data !== undefined){
    res.status(200).json({
      status: true,
      message: 'saved in database',
      data,
    });
  }
};

exports.getAllCategories = async function(req, res) {
  let data;

  // PAGINATION
  let skipping = req.query.skip;
  let limiting = req.query.limit;
  let searching = req.query.search;
  // eslint-disable-next-line prefer-destructuring
  const asc = req.query.asc;
  // eslint-disable-next-line prefer-destructuring
  let sort = req.query.sort;
  let x = 'ASC';
  // eslint-disable-next-line prefer-destructuring
  const Op = db.Sequelize.Op;
  if (skipping === null || skipping === undefined || skipping === '') {
    skipping = 0;
  }
  if (limiting === '' || limiting === null || limiting === undefined){
    limiting = 5;
  }
  if (searching === null || searching === undefined){
    searching = '';
  }
  if (sort === null || sort === undefined || sort === '') {
    sort = 'id';
  }
  if (asc === '0') {
    x = 'DESC';
  } else {
    x = 'ASC';
  }
  try {
    data = await categories.findAll({
      where: { categoryName: { [Op.iLike]: `${searching}%` } },
      order: [[sort, x]],
      offset: skipping,
      limit: limiting,
    });
  } catch (err){
    res.status(500).json({
      status: false,
      message: 'Unable To List Data.',
      data: err,
    });
  }
  if (data !== undefined){
    res.status(200).json({
      status: true,
      message: 'All Data fetched successfully',
      data,
      metadata: {
        skip: req.query.skip,
        limit: req.query.limit,
        search: req.query.search,
      },
    });
  }
};

exports.updateCategories = async function(req, res) {
  let data;
  try {
    data = await categories.update({
      categoryName: req.body.categoryName,
      status: req.body.status,
    },
    { where: { id: req.params.id } });
  } catch (err){
    res.status(500).json({
      status: false,
      message: 'Unable To Update.',
      data: err,
    });
  }
  if (data !== undefined){
    res.status(200).json({
      status: true,
      message: 'Updated Successfully',
      data,
    });
  }
};

exports.deleteCategories = async function (req, res) {
  let data;
  try {
    data = await categories.destroy({ where: { id: req.params.id } });
  } catch (err){
    res.status(500).json({
      status: false,
      message: 'Unable To Delete.',
      data: err,
    });
  }
  if (data !== undefined){
    res.status(200).json({
      status: true,
      message: 'Deleted Successfully',
      data,
    });
  }
};

exports.activateCategories = async function(req, res) {
  let data;
  try {
    data = await categories.update({
      status: true,
    },
    { where: { id: req.params.id } });
  } catch (err){
    res.status(500).json({
      status: false,
      message: 'Unable To Update.',
      data: err,
    });
  }
  if (data !== undefined){
    res.status(200).json({
      status: true,
      message: 'Updated Successfully',
      data,
    });
  }
};

exports.deactivateCategories = async function(req, res) {
  let data;
  try {
    data = await categories.update({
      status: false,
    },
    { where: { id: req.params.id } });
  } catch (err){
    res.status(500).json({
      status: false,
      message: 'Unable To Update.',
      data: err,
    });
  }
  if (data !== undefined){
    res.status(200).json({
      status: true,
      message: 'Updated Successfully',
      data,
    });
  }
};
