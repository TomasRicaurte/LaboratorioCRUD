const connectDB = require('./src/db')

const createUser = async (user) => {
  try {
    const db = await connectDB();
    const collectionUsers = db.collection('users');
    const createResult = await collectionUsers.insertOne(user);
    return createResult;
  } catch (error) {
    return error;
  }
};

const findUsers = async () => {
  try {
    const db = await connectDB();
    const collectionUsers = db.collection('users');
    const findResult = await collectionUsers.find({}).toArray();
    return findResult
  } catch (error) {
    return error
  }
};

const findUserById = async (id) => {
  try {
    const db = await connectDB();
    const collectionUsers = db.collection('users');
    const findIdResult = await collectionUsers.findOne({_id: id});
    return findIdResult;
  } catch (error) {
    return error
  }
};

const deleteUserById = async (id) => {
  try {
    const db = await connectDB();
    const collectionUsers = db.collection('users');
    const deleteResult = await collectionUsers.deleteOne({_id: id});
    return deleteResult;
  } catch (error) {
    return error
  }
};

const updateUser = async (id, data) => {
  try {
    const db = await connectDB();
    const collectionUsers = db.collection('users');
    const updateData = { $set: {... data} }; 
    const updateResult = await collectionUsers.updateOne({_id: id}, updateData);
    return updateResult
  } catch (error) {
    return error
  }
};

const CRUD = {
  createUser,
  findUsers,
  findUserById,
  deleteUserById,
  updateUser,
};

module.exports = CRUD;
