import React from "react";
import GlobalStyle from "./globalStyles";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./Pages/Themes";
import { Switch, Route } from "react-router-dom";

import { Main, AboutPage, BlogPage, MySkillsPage, ProjectsPage } from "./Pages";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/blog" component={BlogPage} />
          <Route exact path="/projects" component={ProjectsPage} />
          <Route exact path="/skills" component={MySkillsPage} />
        </Switch>
      </ThemeProvider>
    </>
  );
};

export default App;
