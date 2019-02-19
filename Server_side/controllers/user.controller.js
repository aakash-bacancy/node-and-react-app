const Sequelize = require('sequelize');
const db = require('../models/index');

const User_instance = db.Users;
// const user_model=user_instance();
// display all users
exports.list = async function(req, res){
  let data;
  // eslint-disable-next-line prefer-destructuring
  const Op = Sequelize.Op;
  const condition = {};
  condition.limit = req.query.limit || 10;
  condition.offset = req.query.skip || 0;
  // condition.order=[[Sequelize.col(req.query.sort||'id'),req.query.asc == '0' ? 'DESC' : 'ASC']];

  if (req.query.sort !== '' && req.query.sort){
    condition.order = req.query.sort.split(',').map(col => col.split(':'));
  } else {
    condition.order = ['id'];
  }
  condition.where = { firstName: { [Op.like]: `${req.query.search || '%'}%` } };
  try {
    // eslint-disable-next-line no-undef
    data = await User_instance.findAll(condition);
    // eslint-disable-next-line no-undef
    if (data){
      res.send({
        status: true,
        message: 'query executed succesfully',
        data,
      });
    } else {
      res.send({
        status: false,
        message: 'data not found',
        data,
      });
    }
  } catch (err){
    res.status(500).json({
      status: false,
      message: 'error',
      data: err,
    });
  }
};

// add a user
exports.create = async function(req, res){
  let data;
  try {
    const user = new User_instance({
      firstName: req.body.first_name,
      lastName: req.body.last_name,
      email: req.body.email,
      status: false,
      contact_no: req.body.contact_no,
      role: req.body.role,
    });
    // eslint-disable-next-line no-undef
    data = await user.save();
    // eslint-disable-next-line no-undef
    if (data){
      res.send({
        status: true,
        message: 'query executed succesfully',
        data,
      });
    } else {
      res.send({
        status: false,
        message: 'unable to enter that data',
        // eslint-disable-next-line no-undef
        data: err,
      });
    }
  } catch (err){
    res.status(500).json({
      status: false,
      message: 'error',
      data: err,
    });
  }
};

// delete a user
exports.delete = async function(req, res){
  let data;
  try {
    const { id } = req.params;
    // eslint-disable-next-line no-undef
    data = await User_instance.destroy({ where: { id } });
    // eslint-disable-next-line no-undef
    if (data){
      res.send({
        status: true,
        message: `deleted Successfully -> User Id = ${id}`,
        data,
      });
    } else {
      res.status(200).json({ mgs: `User not found-> User Id = ${id}` });
    }
  } catch (err){
    res.status(500).json({
      status: false,
      message: 'error',
      data: err,
    });
  }
};

// update user details by id
exports.edit = async function(req, res){
  let data;
  try {
    data = await User_instance.update({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      status: req.body.status,
      contact_no: req.body.contact_no,
      role: req.body.role,
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
// deactive user's status by id
exports.deactive = async function(req, res){
  let data;
  try {
    // eslint-disable-next-line no-undef
    data = await User_instance.update({ status:false }, { where: {id:req.params.id}  });
    // eslint-disable-next-line no-undef
    if (data){
      res.send({
        status: true,
        message: `deactivated Successfully -> User Id = ${id}`,
        data,
      });
    } else {
      res.status(200).json({ mgs: `User not found-> User Id = ${id}` });
    }
  } catch (err){
    res.status(500).json({
      status: false,
      message: 'error',
      data: err,
    });
  }
};
// active user's status by id
exports.active = async function(req, res){
  let data;
  try {
    const  id  = req.params.id;
    // eslint-disable-next-line no-undef
    data = await User_instance.update({ status: true }, { where:{ id:req.params.id }  });
    // eslint-disable-next-line no-undef
    if (data === 1){
      res.send({
        status: true,
        message: `activated Successfully -> User Id = ${id}`,
        data,
      });
    } else {
      res.status(200).json({ mgs: `User not found-> User Id = ${id}` });
    }
  } catch (err){
    res.status(500).json({
      status: false,
      message: 'error',
      data: err,
    });
  }
};
