export interface CreateUserDto {
  id: number;
  name: string;
  last_name: string;
  email: string;
  phone: string;
  username: string;
  password?: string;
  role_id: number;
}
