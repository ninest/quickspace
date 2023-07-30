export interface Space {
  id: string;
  name: string;
  users: User[];
}

export interface User {
  id: string;
  name: string;
}