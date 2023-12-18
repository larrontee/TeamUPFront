import { User } from './user';

export class Evento {
  id: number;
  name: string;
  creator: User;
  description: string;
  date: Date; // LocalDate no existe en TypeScript, usamos Date
  address: string;
  tipoEvent: string;
  participants: User[];
}
