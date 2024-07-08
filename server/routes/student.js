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
