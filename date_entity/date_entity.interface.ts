import { EventUserEntity } from "../event_user/event_user.interface";

export interface DateEntity{
  id: number;
  date: Date;
  user: EventUserEntity;
}