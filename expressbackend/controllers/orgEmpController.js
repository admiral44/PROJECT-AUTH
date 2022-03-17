import OrgEmpModel from "../models/orgEmp.js";

class OrgEmpController {

    // Dislpay all information
    static getAllData = async (req, res) => {
        try {
            const allInfo = await OrgEmpModel.find()
            res.send(allInfo)
        } catch (error) {
            console.log(error)
        }
    }

    // Display data as per the Email.
    static getOnlyData = async (req, res) => {

        const { empEmail, empPass } = req.body
        const user = await OrgEmpModel.findOne({ empEmail: empEmail })

        if (!user) {
            res.send({ "status": "failed", "message": "Email already exists." })
        } else {
            try {
                const allInfo = await OrgEmpModel.find()
                res.send(allInfo)
            } catch (error) {
                console.log(error)
            }
        }
    }

    // Employee Registartion
    static orgEmpReg = async (req, res) => {

        const { empEmail, empPass } = req.body
        const user = await OrgEmpModel.findOne({ empEmail: empEmail })

        if (user) {
            res.send({ "status": "failed", "message": "Email already exists." })
        } else {
            if (empEmail && empPass) {
                if (empPass === empPass) {

                    try {
                        const doc = new OrgEmpModel({
                            empEmail: empEmail,
                            empPass: empPass
                        })

                        // to save user in MongoDB.
                        await doc.save()

                        res.status("201").send({ "status": "success", "message": "User resgister successfully.." })

                    } catch (error) {
                        res.send({ "status": "failed", "message": "Someting went Wrong..!! Registration Failed.!" + error })
                    }
                } else {
                    res.send({ "status": "failed", "message": "Password is not match." })
                }
            } else {
                res.send({ "status": "failed", "message": "Please enter all information." })
            }
        }
    }

    //user Login Module
    static orgEmpLogin = async (req, res) => {

        try {

            const { empEmail, empPass } = req.body
            // check all fileds are filled.
            if (empEmail && empPass) {

                const user = await OrgEmpModel.findOne({ empEmail: empEmail, empPass: empPass })
                // check empEmail is present or not.
                if (user != null) {

                    // const isMatch = await bcrypt.compare(empPass, user.empPass)

                    // check empEmail and passowrd is true or not.
                    if ((user.empEmail === empEmail) && (user.empPass === empPass)) {

                        // Genrating JWT token here.
                        // const jwtToken = jwt.sign({ userid: user._id }, process.env.JWT_SECRETKEY, { expiresIn: "1d" })

                        res.status("201").send({ "status": "success", "message": "your successfully Login." })
                    } else {
                        res.send({ "status": "failed", "message": "Please check your empEmail & empPass." })
                    }
                } else {
                    res.send({ "status": "failed", "message": "Please enter valid Email & empPass." })
                }
            } else {
                res.send({ "status": "failed", "message": "Please enter all Fileds." })
            }

        } catch (error) {
            res.send({ "status": "failed", "message": "Error" + error })
        }
    }

}

export default OrgEmpController
