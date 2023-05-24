function allTheArgs(func, ...args) {
  //console.log("args", args);
  return func.bind(null, ...args);
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;