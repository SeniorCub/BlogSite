import express from 'express';
import cors from 'cors';
import path from 'path';
import multer from 'multer';
import { getBlog, uploadBlog } from '../controller/blogcontroller.js';

const router = express.Router();

// Set up Multer storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (file.fieldname === 'airtistImg') {
            cb(null, 'uploads/airtistImg');
        } else if (file.fieldname === 'imageCover') {
            cb(null, 'uploads/CoverImg');
        } else {
            cb(null, 'uploads/allImg');
        }
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage }).fields([
    { name: 'airtistImg', maxCount: 1 },
    { name: 'imageCover', maxCount: 1 },
    { name: 'image', maxCount: 1 }
]);

// Serve uploaded images as static files
router.use('/uploads', express.static('uploads'));

router.use(cors());
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

router.post('/upload', upload, uploadBlog);
router.get('/blogs', getBlog);

export default router;