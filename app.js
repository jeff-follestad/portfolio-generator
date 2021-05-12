const profileDataArgs = process.argv.slice(2);

const printProfileData = profileDataArr => {
  // This...
  profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs);