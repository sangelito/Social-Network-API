const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtsById, 
    createThoughts,
    updateThoughts,
    deleteThoughts,
    addReaction,
    deleteReaction,
} = require('../../controllers/thoughts-controller')