export const reduxActdefaultState = ( project ) => ({
  type: 'DEFAULT_STATE',
  payload: project
});

export const reduxActchangeStatus = ( index, status ) => ({
  type: 'CHANGE_STATUS',
  payload: { index, status }
});