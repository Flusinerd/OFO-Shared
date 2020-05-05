import { DateResponse } from "../date_entity/date.input";
import { PlatformEntity } from "../platform/platform.interface";
import { EventResponse } from "../event/event.response";

export interface GetUserResponse {
  id: number;
  dates: DateResponse[];
  platforms: PlatformEntity[];
  event: EventResponse;
  name?: string;
}