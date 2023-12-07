import { Request, Response } from 'express';
import { UserServices } from './user.service';
import UserValidationSchema from './user.validation';

const createUser = async (req: Request, res: Response) => {
  try {
    const { user: userData } = req.body;

    // data validation using zod

    const zodParsedData = UserValidationSchema.parse(userData);

    const result = await UserServices.createUserIntoDB(zodParsedData);
    res.status(200).json({
      success: true,
      message: 'User created successfully',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something Went Wrong',
      error: err,
    });
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
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something Went Wrong',
      error: err,
    });
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const parsedId = parseInt(userId);
    const result = await UserServices.getSingleUserFromDB(parsedId);
    res.status(200).json({
      success: true,
      message: 'User fetched successfully!',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something Went Wrong',
      error: err,
    });
  }
};

// const updateSingleUser = async (req: Request, res: Response) => {
//   try {
//     const userId = req.params.userId;
//     const userData = req.body;
//     const result = await UserServices.updateSingleUserFromDB(userId, userData);
//     res.status(200).json({
//       success: true,
//       message: 'User Updated successfully!',
//       data: result,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

const deleteUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const parsedId = parseInt(userId)
    const result = await UserServices.deleteUser(parsedId);
    res.status(200).json({
      success: true,
      message: 'User Deleted successfully!',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something Went Wrong',
      error: err,
    });
  }
};

export const UserControllers = {
  createUser,
  getAllUsers,
  getSingleUser,
  // updateSingleUser,
  deleteUser,
};
