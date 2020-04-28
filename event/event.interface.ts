import { PlatformEntity } from '../platform/platform.interface';
import { EventUserEntity } from '../event_user/event_user.interface';

export interface EventEntity{
  id: number;

  title: string;

  eventId: string;

  optimalDate: Date;

  optimalPlatform: PlatformEntity

  voted_count?: number;

  users?: EventUserEntity[];

  platforms?: PlatformEntity[];
}