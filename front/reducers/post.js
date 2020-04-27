export const initialState = {
  mainPosts: [
    {
      User: {
        id: 1,
        nickname: 'yongE',
      },
      content: '첫번째 게시글',
      img: 'https://avatars0.githubusercontent.com/u/10962668?s=60&v=4',
    },
  ],
  imagePaths: [],
};

export const ADD_POST = 'ADD_POST';
export const ADD_DUMMY = 'ADD_DUMMY';

// const addPost = {
//   type: ADD_POST,
// };

// const addDummy = {
//   type: ADD_DUMMY,
//   data: {
//     constent: 'hello',
//     UserId: 1,
//     User: {
//       nickname: '용이',
//     },
//   },
// };

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
      };
    }
    case ADD_DUMMY: {
      return {
        ...state,
        mainPosts: [action.data, ...state.mainPosts],
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
