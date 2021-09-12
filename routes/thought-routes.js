const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    addReaction,
    removeReaction,
    updateThought,
    deleteThought
} = require('../controllers/thought-controller');

// GET all thoughts at /api/thoughts
router.route('/')
.get(getAllThoughts)

// POST thought at /api/thoughts/:userId
router.route('/:userId')
.post(createThought);

// POST reactions at /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions')
.post(addReaction);

// DELETE reaction at /api/thoughts/:thoughtId/:reactionId
router.route('/:thoughtId/:reactionId')
.delete(removeReaction);


// GET and PUT and DELETE thought by id at /api/thoughts/:id
router.route('/:thoughtId')
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought);




module.exports = router;