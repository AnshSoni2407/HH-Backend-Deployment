import express from "express";
import {
  create,
  fetch,
  saveJob,
  fetchSaveJob,
  fetchCreatedJobs,
  removeSavedJob,
  deleteJob,
  updateJob,
  fetchManageJobs,
  deleteJobByAdmin,
} from "../Controller/JobController.js";
const router = express.Router();

router.post("/create", create);

router.get("/fetch", fetch);

router.post("/savedJobs/:job/:userId", saveJob);

router.get("/fetch/savedJobs/:userId", fetchSaveJob);

router.get("/fetch/createdJobs/:userId", fetchCreatedJobs);

router.delete("/removeSavedJob/:jobId/:userId", removeSavedJob);

router.delete("/deleteJob/:jobId/:userId", deleteJob);

router.put("/update/:jobId", updateJob);

router.get("/fetch/all/jobs", fetchManageJobs);

router.delete("/delete/byAdmin/:jobId", deleteJobByAdmin);

export default router;
