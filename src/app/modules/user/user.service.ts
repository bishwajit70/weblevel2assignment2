import { UserModel } from '../user.model';
import { IUser } from './user.interface';

const createUserIntoDB = async (user: IUser) => {
  const result = (await UserModel.create(user)).toObject();
  delete result.password;
  return result;
};

const getAllUserFromDB = async (): Promise<IUser[]> => {
  const result = await UserModel.find()
    .select('-password')
    .select('-orders')
    .select('-userId')
    .select('-_id');
  return result;
};

const getSingleUserFromDB = async (userId: number) => {
  const result = await UserModel.findOne({ userId });
  const data = result?.toObject();
  delete data?.password;
  return data;
};

// const updateSingleUserFromDB = async (
//   id: number,
//   userData: IUser,
// ): Promise<IUser | null> => {
//   const result = await UserModel.findByIdAndUpdate(id, userData, {
//     new: true,
//     runValidators: true,
//   });
//   return result;
// };

const deleteUser = async (userId: number) => {
  const result = await UserModel.updateOne({ userId }, { isDeleted: true });
  return result;
};

export const UserServices = {
  createUserIntoDB,
  getAllUserFromDB,
  getSingleUserFromDB,
  // updateSingleUserFromDB,
  deleteUser,
};
