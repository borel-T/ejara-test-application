import React from "react";
// routes-configs
import { Routes, Route } from "react-router";
import appRoutes from "./lib/appRoutes";
// views
import Landing from "./containers/auth/landing";
import NoteBoard from "./containers/noteboard";
import Notes from "./containers/noteboard/notes";
import Archives from "./containers/noteboard/archives";
import BinNotes from "./containers/noteboard/binNotes";
import Reminders from "./containers/noteboard/reminders";
import NotFound from "./containers/notFound";
// contexts
import { NotesContextProvider } from "./appContext/";

const App = () => {
  return (
    <NotesContextProvider>
      <Routes>
        <Route path={appRoutes.home} element={<Landing />} />
        <Route path={appRoutes.notes} element={<NoteBoard />}>
          <Route index element={<Notes />} />
          <Route path={appRoutes.archives} element={<Archives />} />
          <Route path={appRoutes.bin} element={<BinNotes />} />
          <Route path={appRoutes.reminders} element={<Reminders />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </NotesContextProvider>
  );
};

export default App;
