import { PlatformEntity } from "../platform/platform.interface";
import { DateEntity } from "../date_entity/date_entity.interface";
import { EventEntity } from "../event/event.interface";

export interface EventUserEntity{
  id: number;
  dates: DateEntity[];
  platforms: PlatformEntity[];
  event?: EventEntity
}