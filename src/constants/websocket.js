const UPDATE_STAGE_TITLE = "UPDATE_STAGE_TITLE";

export const messageTypes = [UPDATE_STAGE_TITLE].reduce((accum, msg) => {
  accum[msg] = msg;
  return accum;
}, {});

export const uri = "";
