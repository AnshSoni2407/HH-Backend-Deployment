import userModel from "../Model/user.model";

export const fetchAllUsersAdmin = async (req, res) => {
  try {
    const res = await userModel.find();

    res
      .status(200)
      .json({ message: "user fetched succesfully for Admin", res });
  } catch (error) {
    res.status(200).json({ message: "error while fetching users for Admin" });
  }
};

export const deleteJobByAdmin = async (req, res) => {
  const { userId } = req.params;

  try {
    const deleteJob = await userModel.findByIdAndDelete(userId);

    res
      .status(200)
      .json({ message: "Job deleted successfully by Admin", deleteJob });
  } catch (error) {
    res.status(400).json({ message: "Error while deleting job by Admin" });
  }
};


    