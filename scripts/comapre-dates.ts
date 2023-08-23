import { _Date } from '../../constants/types';

/*
    Returns whether dateA is before dateB.
*/
export default function compareDates(dateA: _Date, dateB: _Date): number {
    return dateA.year - dateB.year === 0
        ? dateA.month - dateB.month
        : dateA.year - dateB.year;
}
