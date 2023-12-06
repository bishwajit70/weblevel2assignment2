import { User } from '../user.model';
import { TIUser } from './user.interface';

const createUserIntoDB = async (userData: TIUser) => {
  const user = new User(userData);

  if (await user.isUserExists(userData.userId)) {
    throw new Error('User Already Exists!');
  }
  const result = await user.save();
  const data = result.toObject();
  // const result = (await UserModel.create(user)).toObject();
  delete data.password;
  return data;
};

const getAllUserFromDB = async (): Promise<TIUser[]> => {
  const result = await User.find()
    // .select('-password')
    // .select('-orders')
    // .select('-userId')
    // .select('-_id');
  return result;
};

const getSingleUserFromDB = async (userId: number) => {
  const result = await User.findOne({ userId });
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
  const result = await User.updateOne({ userId }, { isDeleted: true });
  return result;
};

export const UserServices = {
  createUserIntoDB,
  getAllUserFromDB,
  getSingleUserFromDB,
  // updateSingleUserFromDB,
  deleteUser,
};
