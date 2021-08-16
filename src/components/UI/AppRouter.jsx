import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import About from "../../Pages/About";
import Posts from "../../Pages/Posts";
import ErrorPage from "../../Pages/ErrorPage";

import { PostIdPage } from "../../Pages/PostIdPage";

export const AppRouter = () => {
  return (
    <Switch>
      <Route path="/about" component={About} />
      <Route exact path="/posts" component={Posts} />
      <Route exact path="/posts/:id" component={PostIdPage} />
      <Route path="/error" component={ErrorPage} />
      <Redirect to="/error" />
    </Switch>
  );
};
