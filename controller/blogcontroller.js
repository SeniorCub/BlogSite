import express from 'express';
import multer from 'multer';
import path from 'path';
import mongoose from 'mongoose';
import blogModels from "../models/blogmodels.js";

export const uploadBlog = async (req, res) => {
    try {
        const {title, content, image} = req.body

        const imageURL = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;

        console.log(req.file.filename);

        // if (!title || !content) {
        //     return res.send("Fill out all Fields");
        // }

        const newBlog = new blogModels({
            title, 
            content, 
            image: imageURL
        });
        await newBlog.save()
        
        res.status(200).json({
            success: true, 
            msg: "Blod Posted Succesfully"
        })
    } catch (err) {
        return res.status(500).json({
            success: false, 
            msg: err.message 
        });
    }
}

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