import { Role } from './role.model';

export interface UserListDto {
  id: number;
  name: string;
  last_name: string;
  email: string;
  phone: string;
  username: string;
  role: Role;
}
