const Article = require('../model/Article');

const getArticles = (req,res) => {
  Article.find((error, articles) => {
    if(error){
      res.json({message: error.message});
    }
    else{
      res.json(articles);
    }
  })
}

const getArticleById = (req, res) => {
  Article.findOne({title: req.params.articleTitle}, (error, article) => {
    if(!error){
      res.json(article);
    }
    else{
      res.json({message: error.message});
    }
  })
}

const postArticle = (req, res) => {
  const newarticle = new Article({
    title: req.body.title,
    content: req.body.content
  });
  newarticle.save(error => {
    if(!error){
      res.json({message: "Successfully added a new article"})
    }
    else{
      res.json({message: error.message});
    }
  });
}

const updateArticle = (req, res ) => {
  Article.updateOne(
    {title: req.params.articleTitle},
    {title: req.body.title, content: req.body.content},
    {overwrite: true},
    error => {
      if(!error){
        res.json({message: "Successfully updated article"})
      }
      else{
        res.json({message: error.message});
      }
    }
  )
}

const updateArticlePath = (req, res ) => {
  Article.updateOne(
    {title: req.params.articleTitle},
    {$set: req.body },
    error => {
      if(!error){
        res.json({message: "Successfully updated article"})
      }
      else{
        res.json({message: error.message});
      }
    }
  )
}

const deleteArticles = (req, res) => {
  Article.deleteMany(error => {
    if(!error){
      res.json({message: "successfully deleted all articles"});
    }
    else{
      res.json({message: error.message});
    }
  })
}

const deleteArticlesById = (req, res) => {
  Article.deleteOne({title: req.params.articleTitle}, error => {
    if(!error){
      res.json({message: "successfully deleted all articles"});
    }
    else{
      res.json({message: error.message});
    }
  })
}

module.exports = {
  getArticleById,
  getArticles,
  postArticle,
  updateArticle,
  updateArticlePath,
  deleteArticles,
  deleteArticlesById
}