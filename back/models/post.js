module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    content: {
      type: DataTypes.TEXT, // 매우긴글
      allowNull: false,
    },
  }, {
    charset: 'utf8mb4', // 한글 + 이모티콘
    collate: 'utf8mb4_general_ci',
  });
  Post.associate = (db) => {
    db.Post.belongsTo(db.User); // 테이블에 UserId 컬럼이 생겨요
    db.Post.hasMany(db.Comment);
    db.Post.hasMany(db.Image);
    db.Post.belongsTo(db.Post, { as: 'Retweet' }); // RetweetId 컬럼이 생겨요
    db.Post.belongsToMany(db.Hashtag, { through: 'PostHashTag' });
    db.Post.belongsToMany(db.User, { through: 'Like', as: 'Likers' });
  };
  return Post;
}