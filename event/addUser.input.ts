import { EventUserInput } from "../event_user/event_user.input";

export interface AddUserInput {
  eventId: number;

  /**
   * Pass either the user via userData or the userId
   */
  userData?: EventUserInput;

  /**
   * Pass either the user via userData or the userId
   */
  userId?: number;
}
