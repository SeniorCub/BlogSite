import express from 'express';
import multer from 'multer';
import path from 'path';
import mongoose from 'mongoose';
import blogModels from "../models/blogmodels.js";

// Upload Blog
export const uploadBlog = async (req, res) => {
    try {
        const { title, content, author, category, quote } = req.body;
        const files = req.files;

        const airtistImgURL = `${req.protocol}://${req.get('host')}/uploads/airtistImg/${files.airtistImg[0].filename}`;
        const imageCoverURL = `${req.protocol}://${req.get('host')}/uploads/CoverImg/${files.imageCover[0].filename}`;
        const imageURL = `${req.protocol}://${req.get('host')}/uploads/allImg/${files.image[0].filename}`;

        const newBlog = new blogModels({
            title,
            content,
            author,
            category,
            airtistImg: airtistImgURL,
            imageCover: imageCoverURL,
            quote,
            image: imageURL
        });
        await newBlog.save();

        res.status(200).json({
            success: true,
            msg: "Blog Posted Successfully"
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            msg: err.message
        });
    }
};

// Update Blog
export const updateBlog = async (req, res) => {
    try {
        const { title, content, author, category, quote } = req.body;
        const { news_id } = req.params;

        const updatedFields = {
            title,
            content,
            author,
            category,
            quote,
        };

        if (req.files && req.files.airtistImg) {
            updatedFields.airtistImg = `${req.protocol}://${req.get('host')}/uploads/airtistImg/${req.files.airtistImg[0].filename}`;
        }

        if (req.files && req.files.imageCover) {
            updatedFields.imageCover = `${req.protocol}://${req.get('host')}/uploads/CoverImg/${req.files.imageCover[0].filename}`;
        }

        if (req.files && req.files.image) {
            updatedFields.image = `${req.protocol}://${req.get('host')}/uploads/allImg/${req.files.image[0].filename}`;
        }

        const updatedBlog = await blogModels.findByIdAndUpdate(news_id, updatedFields, { new: true });

        res.status(200).json({
            success: true,
            msg: "Blog updated successfully",
            blog: updatedBlog
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            msg: err.message
        });
    }
};

// Delete Blog
export const deleteBlog = async (req, res) => {
    try {
        const { news_id } = req.params;
        await blogModels.findByIdAndDelete(news_id);
        res.status(200).json({
            success: true,
            msg: "Blog deleted successfully"
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            msg: err.message
        });
    }
};

// All Blogs
export const getBlog = async (req, res) => {
    try {
        const allBlogs = await blogModels.find();
        res.json(allBlogs);
    } catch (error) {
        res.status(404).json({ success: false, msg: error.message });
    }
}

// Get Blog by ID
export const getBlogById = async (req, res) => {
    try {
        const { news_id } = req.params;
        const blog = await blogModels.findById(news_id);

        if (!blog) {
            return res.status(404).json({
                success: false,
                msg: "Blog not found"
            });
        }

        res.status(200).json(blog);
    } catch (err) {
        return res.status(500).json({
            success: false,
            msg: err.message
        });
    }
};