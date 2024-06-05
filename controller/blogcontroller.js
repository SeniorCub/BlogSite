import express from 'express';
import multer from 'multer';
import path from 'path';
import mongoose from 'mongoose';
import blogModels from "../models/blogmodels.js";

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

export const getBlog = async (req, res) => {
    try {
        const allBlogs = await blogModels.find();
        console.log(allBlogs);
        res.json(allBlogs)
    } catch (error) {
        res.status(404);
        res.end(error);
    }
}