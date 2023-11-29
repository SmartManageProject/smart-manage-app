export type IUser = {
  id: string;
  name: string;
  email: string;
  role: string;
};

export type IMessage = {
  user: IUser;
  id: string;
  userId: string;
  projectId: string;
  text: string;
};
