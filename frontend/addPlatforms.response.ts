import { PlatformResponse } from '../platform/platform.response';

export interface AddPlatformsResponse{
  addPlatforms: {
    platforms: PlatformResponse[]
  }
}