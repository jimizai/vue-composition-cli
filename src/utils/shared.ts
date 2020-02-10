export const queryString = () => {
  let _queryString: { [key: string]: any } = {};
  const { hash } = window.location;
  const _query = hash.split("?")[1] ?? "";
  const _vars = _query.split("&");
  _vars.forEach((v, i) => {
    const _pair = v.split("=");
    if (!_queryString.hasOwnProperty(_pair[0])) {
      _queryString[_pair[0]] = decodeURIComponent(_pair[1]);
    } else if (typeof _queryString[_pair[0]] === "string") {
      const _arr = [_queryString[_pair[0]], decodeURIComponent(_pair[1])];
      _queryString[_pair[0]] = _arr;
    } else {
      _queryString[_pair[0]].push(decodeURIComponent(_pair[1]));
    }
  });
  return _queryString;
};

export const randomStr = () =>
  Math.random()
    .toString(36)
    .substring(2) +
  Math.random()
    .toString(36)
    .substring(2);

export const parseFile = (file: File): Promise<Blob> =>
  new Promise(resolve => {
    let reader = new FileReader();
    reader.readAsArrayBuffer(file);
    let blob: any = null;
    reader.onload = (e: any) => {
      if (typeof e.target.result === "object") {
        blob = new Blob([e.target.result]);
      } else {
        blob = e.target.result;
      }
      resolve(blob);
    };
  });
