import { DateEntity } from "../date_entity/date_entity.interface";
import { PlatformEntity } from "../platform/platform.interface";
import { createPlatform } from "../platform/createPlatform.input";

export interface CreateUserInput {
  eventId: number;
  dates?: DateEntity[];
  platforms?: createPlatform[];
}
