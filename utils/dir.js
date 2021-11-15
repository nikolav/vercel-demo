module.exports = (node) => {
  return Object.keys(node).reduce((accu, name) => {
    accu[name] = Object.prototype.toString
      .call(node[name])
      .replace(/^\[\w+\s+(\w+)\]$/, (m, _1) => _1.toLowerCase());
    return accu;
  }, {});
};
