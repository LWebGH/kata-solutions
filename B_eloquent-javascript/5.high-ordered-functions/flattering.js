const flattering = (array) => {
  return array.reduce((result, item) => {
    if (Array.isArray(item)) item = flattering(item);
    return result.concat(item);
  }, []);
}

export { flattering };