import { Request, Response } from 'express';
import { UserServices } from './user.service';

const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body.user;
    const result = await UserServices.createUserIntoDB(user);
    res.status(200).json({
      success: true,
      message: 'User created successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getAllUserFromDB();
    res.status(200).json({
      success: true,
      message: 'Users fetched successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId, 10);
    // console.log(typeof userId);
    const result = await UserServices.getSingleUserFromDB(userId);
    res.status(200).json({
      success: true,
      message: 'User fetched successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateSingleUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const userData = req.body;
    const result = await UserServices.updateSingleUserFromDB(id, userData);
    res.status(200).json({
      success: true,
      message: 'User Updated successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = req.body.id;
    await UserServices.deleteUser(id);
    res.status(200).json({
      success: true,
      message: 'User Deleted successfully!',
      data: null,
    });
  } catch (error) {
    console.log(error);
  }
};

export const UserControllers = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateSingleUser,
  deleteUser,
};
