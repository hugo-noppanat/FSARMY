export const getValueFromDropdown = (dropdownName) =>{
  let value = 0;
  Object.entries(dropdownName).map( ([key, val] = entry) => {
    if(key === "currentKey")
      value = val;
  });
  return value;
}