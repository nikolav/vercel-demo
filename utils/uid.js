const uidCache_ = {};
let uid_ = 0;

module.exports = (config = { prefix: "#" }) => {
  let id;
  for (; uidCache_.hasOwnProperty((id = `${config.prefix}${uid_++}`)); );
  uidCache_[id] = 1;
  return id;
};

// export default uid = () => `#${uid_++}`;
