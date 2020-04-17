import { DateEntity } from "../../event-user/models/date.entity";
import { PlatformEntity } from "../../platform/models/platform.entity";

export interface EventUserDto{
  dates: DateEntity[];
  platforms: PlatformEntity[];
}