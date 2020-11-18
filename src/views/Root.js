import GlobalStyle from 'theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';
import JobListings from 'views/JobListings';
import JobProvider from 'JobProvider';

const Root = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <JobProvider>
          <JobListings />
        </JobProvider>
      </ThemeProvider>
    </>
  );
};

export default Root;
