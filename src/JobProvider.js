import { createContext, useState } from 'react';
import { data } from 'data/data.js';

export const JobContext = createContext();

const JobProvider = ({ children }) => {
  
  const jobs = data.map(job => {
    const { role, level, languages, tools } = job;
    const tags = [role, level, ...languages, ...tools];

    return { ...job, tags };
  });

  const [filters, setFilters] = useState([]);

  const addFilter = tag =>
    setFilters(prevState =>
      !prevState.includes(tag) ? [...filters, tag] : prevState
    );

  const removeFilter = tag => {
    setFilters(prevState => prevState.filter(item => item !== tag));
  };

  const clearFilters = () => {
    setFilters([]);
  };

  const filtredJobs = jobs.filter(({ tags }) =>
    filters.every(tag => tags.includes(tag))
  );

  const contextValue = {
    filtredJobs,
    filters,
    addFilter,
    clearFilters,
    removeFilter,
  };

  return (
    <JobContext.Provider value={contextValue}>{children}</JobContext.Provider>
  );
};

export default JobProvider;
