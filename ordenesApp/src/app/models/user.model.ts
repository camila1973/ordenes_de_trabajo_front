import { Role } from "./role.model";

export interface User {
  id: number;
  name: string;
  last_name: string;
  email: string;
  phone: string;
  username: string;
  password?: string;
  rol_id: number;
}
