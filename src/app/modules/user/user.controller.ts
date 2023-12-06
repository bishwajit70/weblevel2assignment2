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
  } catch (error) {
    console.log(error);
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const parsedID = parseInt(userId);
    const result = await UserServices.getSingleUserFromDB(parsedID);
    res.status(200).json({
      success: true,
      message: 'User fetched successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
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

// const deleteUser = async (req: Request, res: Response) => {
//   try {
//     const { userId } = req.body;
//     await UserServices.deleteUser(userId);
//     res.status(200).json({
//       success: true,
//       message: 'User Deleted successfully!',
//       data: null,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

export const UserControllers = {
  createUser,
  getAllUsers,
  getSingleUser,
  // updateSingleUser,
  // deleteUser,
};
