import { format, parseISO } from 'date-fns';

const formatDate = (date, formatValue) => {
  return format(parseISO(date), formatValue);
};

export default formatDate;
