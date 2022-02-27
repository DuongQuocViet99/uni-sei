export const reduxActDefaultState = ( project ) => ({
  type: 'DEFAULT_STATE',
  payload: project
});

export const reduxActDeleteProject = ( index, projectid ) => ({
  type: 'DELETE',
  payload: { index, projectid }
})

export const reduxActRename = ( index, projectid, name ) => ({
  type: 'RENAME',
  payload: { index, projectid, name }
});