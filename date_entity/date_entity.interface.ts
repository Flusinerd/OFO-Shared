import { EventUserEntity } from "../event_user/event_user.interface";

export interface DateEntity{
  id: number;
  startDate: Date;
  endDate: Date;
  users: EventUserEntity[];
}