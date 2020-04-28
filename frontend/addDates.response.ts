import { DateEntity } from '../date_entity/date_entity.interface';

export interface AddDatesResponse{
  addDates: {
    dates: DateEntity[]
  }
}