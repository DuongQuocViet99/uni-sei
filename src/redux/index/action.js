export const reduxActDefProj = ( project ) => ({
  type: 'DEFAULT',
  payload: project
});

export const reduxActDelProj = ( index, projectid ) => ({
  type: 'DELETE',
  payload: { index, projectid }
})

export const reduxActRenProj = ( index, projectid, name ) => ({
  type: 'RENAME',
  payload: { index, projectid, name }
});