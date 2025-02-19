const queryGenerator = (
  object: Record<string, string | string[] | undefined>
) => {
  let params = "";
  const paramsArray = Object.keys(object).filter((key) => object[key]);
  paramsArray.forEach((key, i) => {
    if (object[key]) {
      if (i === 0) params += `?${key}=${object[key]}`;
      else params += `&${key}=${object[key]}`;
    }
  });
  return params;
};
export { queryGenerator };
