import { createSelector } from "reselect";

const directorySelector = (state) => state.directory;

export const selectDirectorySection = createSelector(
  [directorySelector],
  (directory) => directory.session
);
