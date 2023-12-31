const { StatusCodes } = require("http-status-codes");
const {
  createOrganizer,
  createUser,
  getllUsers,
} = require("../../../services/mongoose/users");

const createCMSOrganizer = async (req, res, next) => {
  try {
    const result = await createOrganizer(req);

    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const createCMSUser = async (req, res, next) => {
  try {
    const result = await createUser(req);

    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getCMSUsers = async (req, res, next) => {
  try {
    const result = await getllUsers(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createCMSOrganizer,
  getCMSUsers,
  createCMSUser,
};
