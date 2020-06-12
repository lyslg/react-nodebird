const express = require('express');
const db = require('../models');

const router = express.Router();

router.get('/', async (req, res, next) => { // GET /api/posts
  try {
    let where = {};
    if (parseInt(req.query.lastId, 10)) {
      where = {
        id: {
          [db.Sequelize.Op.lt]: parseInt(req.query.lastId, 10), // lt = less than
        },
      };
    }
    const posts = await db.Post.findAll({
      where,
      include: [{
        model: db.User,
        attiributes: ['id', 'nickname'],
      }, {
        model: db.Image,
      }, {
        model: db.User,
        through: 'Like',
        as: 'Likers',
        attiributes: ['id']
      }, {
        model: db.Post,
        as: 'Retweet',
        include: [{
          model: db.User,
          attiributes: ['id', 'nickname'],
        }, {
          model: db.Image,
        }]
      }],
      order: [['createdAt', 'DESC'], ['updatedAt', 'ASC']], // DESC는 내림차순, ASC는 오름차순
      limit: parseInt(req.query.limit, 10),
    });
    res.json(posts);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

module.exports = router;
