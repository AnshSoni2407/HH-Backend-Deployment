import userModel from "../Model/user.model.js";

export const fetchAllUsersAdmin = async (req, res) => {
  try {
    const allUsers = await userModel.find();

    res
      .status(200)
      .json({ message: "user fetched succesfully for Admin", allUsers });
  } catch (error) {
    res.status(200).json({ message: "error while fetching users for Admin" });
  }
};

export const deleteUserByAdmin = async (req, res) => {
  const { userId } = req.params;

  try {
    const deleteUser = await userModel.findByIdAndDelete(userId);

    res
      .status(200)
      .json({ message: "user deleted successfully by Admin", deleteUser });
  } catch (error) {
    res.status(400).json({ message: "Error while deleting user by Admin" });
  }
};


export const updateUserByAdmin = async (req, res) => {
  const { userId } = req.params;
  try {
    const updatedUser = await userModel.findByIdAndUpdate(userId, req.body, {
      new: true,
    });
    res.status(200).json({ message: "User updated", updatedUser });
  } catch (error) {
    res.status(400).json({ message: "Error updating user" });
  }
};
