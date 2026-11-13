interface RootObject {
  _id: string;
  body?: string;
  privacy: string;
  user: IUser;
  sharedPost: SharedPost | SharedPost2 | SharedPost3 | null;
  likes: string[];
  createdAt: string;
  commentsCount: number;
  topComment: TopComment2 | TopComment22 | TopComment3 | TopComment | null;
  sharesCount: number;
  likesCount: number;
  isShare: boolean;
  id: string;
  bookmarked: boolean;
  image?: string;
}

interface TopComment3 {
  _id: string;
  content: string;
  image: string;
  commentCreator: IUser;
  post: string;
  parentComment: null;
  likes: any[];
  createdAt: string;
}

interface TopComment22 {
  _id: string;
  content: string;
  commentCreator: IUser;
  post: string;
  parentComment: null;
  likes: string[];
  createdAt: string;
}

interface TopComment2 {
  _id: string;
  content: string;
  image: string;
  commentCreator: IUser;
  post: string;
  parentComment: null;
  likes: string[];
  createdAt: string;
}

interface SharedPost3 {
  _id: string;
  body: string;
  privacy: string;
  user: IUser;
  sharedPost: null;
  likes: any[];
  createdAt: string;
  commentsCount: number;
  topComment: TopComment;
  sharesCount: number;
  likesCount: number;
  isShare: boolean;
  id: string;
}

interface TopComment {
  _id: string;
  content: string;
  commentCreator: IUser;
  post: string;
  parentComment: null;
  likes: any[];
  createdAt: string;
}

interface SharedPost2 {
  _id: string;
  image: string;
  privacy: string;
  user: IUser;
  sharedPost: null;
  likes: string[];
  createdAt: string;
  commentsCount: number;
  topComment: null;
  sharesCount: number;
  likesCount: number;
  isShare: boolean;
  id: string;
}

interface SharedPost {
  _id: string;
  body: string;
  image: string;
  privacy: string;
  user: IUser;
  sharedPost: null;
  likes: any[];
  createdAt: string;
  commentsCount: number;
  topComment: null;
  sharesCount: number;
  likesCount: number;
  isShare: boolean;
  id: string;
}

interface IUser {
  _id: string;
  name: string;
  username: string;
  photo: string;
}