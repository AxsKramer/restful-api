const express = require('express');
const router = express.Router();
const {getArticleById, getArticles, postArticle, updateArticle, deleteArticle} = require('../controllers/articleController');

router.get('/', getArticles);
router.get('/', getArticleById);
router.post('/', postArticle);
router.put('/', updateArticle);
router.delete('/', deleteArticle);

module.exports = router;