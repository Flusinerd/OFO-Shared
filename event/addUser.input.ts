import { CreateUserInput } from '../event_user/createUser.input';

export interface AddUserInput {
  eventId: number;

  /**
   * Pass either the user via userData or the userId
   */
  userData?: CreateUserInput;

  /**
   * Pass either the user via userData or the userId
   */
  userId?: number;
}
