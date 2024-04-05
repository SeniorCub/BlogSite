import express from 'express';
import cors from 'cors';
import path from 'path';
import multer from 'multer';
import { getBlog, uploadBlog } from '../controller/blogcontroller.js';

const router = express.Router();

// Set up Multer storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      // Specify the directory where uploaded files should be stored
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      // Generate a unique file name for the uploaded file
      cb(null, Date.now() + path.extname(file.originalname));
    }
});
  
// Create Multer instance with configuration
const upload = multer({ storage: storage });
  
// Serve uploaded images as static files
router.use('/uploads', express.static('uploads'));

router.use(cors());

// Middleware to parse JSON bodies
router.use(express.json());
router.use(express.urlencoded({extended: false}));

router.post('/upload', upload.single('image'), uploadBlog);

router.get('/blogs', getBlog);

export default router;