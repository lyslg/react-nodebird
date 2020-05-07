module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', { // 테이블명은 users
      nickname: {
        type: DataTypes.STRING(20), // 20글자 이하
        allowNull: false, // 필수
      },
      userId: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true, // 고유한 값
      },
      password: {
        type: DataTypes.STRING(100), // 100글자 이하
        allowNull: false,
      },
    },
    {
      charset: 'utf8',
      ccollate: 'utf8_general.ci', //한글저장가능
    }
  );

  User.associate = (db) => {
    db.User.hasMany(db.Post, { as: 'Post' });
    db.User.hasMany(db.Comment);
    db.User.belongsToMany(db.Post, { through: 'Like', as: 'Liked' });
    db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followers' });
    db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followings' });
  };

  return User;
};
// ALTER USER `root`@`localhost` IDENTIFIED BY '1234', `root`@`localhost` PASSWORD EXPIRE NEVER; 