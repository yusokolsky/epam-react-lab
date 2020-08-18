const getSSOCode = () => {
  const regCode = /access_token=(.*)/;
  return (
    window.location.href.match(regCode) &&
    window.location.href.match(regCode)[1]
  );
};
export default getSSOCode;
