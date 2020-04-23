import { PlatformInput } from "./platform.input";

export interface AddPlatformInput{
  userId: number;
  platform?: PlatformInput;
  platformId?: number;
}

export interface AddPlatformsInput{
  userId: number;
  platforms?: PlatformInput[];
  platformIds?: number[];
}