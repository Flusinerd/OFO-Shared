import { EventUserInput } from '../event_user/event_user.input';

export interface AddDateInput {
  userId: number;
  date?: DateInput
  dateId?: number;
}

export interface AddDatesInput {
  userId: number;
  dates?: DateInput[]
  dateIds?: number[];
}

export interface DateInput{
  id?: number;
  date: Date;
  user?: EventUserInput;
}

export interface DateResponse{
  id: number;
  date: Date;
}