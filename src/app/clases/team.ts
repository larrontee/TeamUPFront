import { User } from './user';

export class Team {
  id: number;
  name: string;
  creator: User;
  photo: string;
  foundation: Date; // LocalDate no existe en TypeScript, usamos Date
  description: string;
  miembros: Set<User>;
}
