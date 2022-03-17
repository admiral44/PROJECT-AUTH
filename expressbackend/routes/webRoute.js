import express from "express";
import OrgEmpController from "../controllers/orgEmpController.js"

const router = express.Router();

router.get('/orgemp', OrgEmpController.getAllData)

// Employee Registartion Route
router.post('/regorgemp', OrgEmpController.orgEmpReg)
// Employee Login Route
router.post('/orgemplog', OrgEmpController.orgEmpLogin)

export default router
