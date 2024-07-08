<<<<<<< HEAD
import express from 'express';
import { Student } from '../models/Student.js';
import bcrypt from 'bcrypt';

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const { roll, username, password, grade } = req.body;
        const student = await Student.findOne({ username });
        if (student) {
            return res.json({ message: 'student is already registered' });
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const newstudent = new Student({
            roll: roll,
            username,
            password: hashPassword,
            grade,
        });
        await newstudent.save();
        return res.json({ registered: true });
    } catch (err) {
        return res.json({ message: 'Error in registoring student' });
    }
});

export { router as StudentRouter };
=======
// server>routes>studnet.js 
import express from 'express'
import {Student } from '../models/Student.js';
import bcrypt from 'bcrypt'
const router = express. Router(); 
import { verifyAdmin } from './auth.js';


router.post('/register',verifyAdmin, async (req, res) => {
try {
const {username, password, roll, grade} = req.body;
const student= await Student.findOne({username})
if(student) {
return res.json({message: "student is registered"})
}
const hashPassword = await bcrypt.hash (password, 10)
const newstudent = new Student({
username,
password: hashPassword,
roll: roll,
grade
})
await newstudent.save()
return res.json({registered:true})
}
catch(err){
    return res.json({
        message: "Error in registering Student"
    })
}
})

export {router as studentRouter}
>>>>>>> 1e0177248e650e4ee822321dc23e8f1c0e996b80
