import deburr from 'lodash.deburr';
import { compareAsc, compareDesc } from 'date-fns';

export const comparators = sort => {
  const { property, ascending } = sort;

  return {
    string: (a, b) => {
      return ascending 
        ? a[property].localeCompare(b[property])
        : b[property].localeCompare(a[property]);
    },
    number: (a, b) => {
      return ascending 
        ? a[property] - b[property] 
        : b[property] - a[property];
    },
    date: (a, b) => {
      return ascending 
        ? compareAsc(a[property], b[property]) 
        : compareDesc(a[property], b[property]);
    },
    boolean: (a, b) => {
      return ascending
        ? (a === b) ? 0 : a ? -1 : 1
        : (a === b) ? 0 : a ? 1 : -1;
    },
  }
};


export const process = (types) => (data, filter, page, sort) => {
  if (filter !== null) {
    const value = deburr(filter.value.trim()).toLowerCase();
    data = data.filter(entity => entity[filter.property].slice(0, value.length).toLowerCase() === value);
  };

  return data.sort(comparators(sort)[types[sort.property]]);
};