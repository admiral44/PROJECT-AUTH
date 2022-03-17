import mongoose from "mongoose";

// Define Schema
const orgEmpSchema = new mongoose.Schema({
    empEmail : {type : String, required : true, trim : true},
    empPass : {type : String, required : true, trim : true},
    empMsg : {type : String },
})

// Module
const OrgEmpModel = mongoose.model("orgEmp", orgEmpSchema)

export default OrgEmpModel
