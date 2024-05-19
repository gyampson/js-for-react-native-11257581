function createUserProfiles(names, modifiedNames) {
  const userProfiles = [];
  let id = 1;
  names.forEach((name, index) => {
    userProfiles.push({
      originalName: name,
      modifiedName: modifiedNames[index],
      id,
    });
    id++;
  });
  return userProfiles;
}
