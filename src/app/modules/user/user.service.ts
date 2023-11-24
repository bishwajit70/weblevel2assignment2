import { UserModel } from '../user.model';
import { IUser } from './user.interface';

const createUserIntoDB = async (user: IUser): Promise<IUser> => {
  const result = await UserModel.create(user);
  return result;
};

const getAllUserFromDB = async (): Promise<IUser[]> => {
  const result = await UserModel.find().select('-password').select('-orders');
  return result;
};

const getSingleUserFromDB = async (userId: string): Promise<IUser | null> => {
  const result = await UserModel.findById(userId);
  return result;
};

const updateSingleUserFromDB = async (
  id: number,
  userData: IUser,
): Promise<IUser | null> => {
  const result = await UserModel.findByIdAndUpdate(id, userData, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteUser = async (id: string): Promise<IUser | null> => {
  const result = await UserModel.findByIdAndDelete(id);
  return result;
};

export const UserServices = {
  createUserIntoDB,
  getAllUserFromDB,
  getSingleUserFromDB,
  updateSingleUserFromDB,
  deleteUser,
};
