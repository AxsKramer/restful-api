const express = require('express');
const router = express.Router();
const {getArticleById, getArticles, postArticle, updateArticle, updateArticlePath, deleteArticles, deleteArticlesById} = require('../controllers/articleController');

router.get('/articles', getArticles);
router.get('/articles/:articleTitle', getArticleById);
router.post('/articles', postArticle);
router.put('/articles/:articleTitle', updateArticle);
router.patch('/articles/:articleTitle', updateArticlePath);
router.delete('/articles', deleteArticles);
router.delete('/articles/:articleTitle', deleteArticlesById);

module.exports = router;