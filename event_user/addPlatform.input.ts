import { createPlatform } from '../platform/createPlatform.input';

export interface AddPlatformInput {
  userId: number;

  /**
   * Pass either new Platform data or existing platformId
   */
  platform?: createPlatform;

  /**
   * Pass either new Platform data or existing platformId
   */
  platformId?: number;
}
