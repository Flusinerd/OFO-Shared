import { PlatformEntity } from '../platform/platform.interface';
import { DateEntity } from '../date_entity/date_entity.interface';

export interface EventUserDto{
  dates: DateEntity[];
  platforms: PlatformEntity[];
}