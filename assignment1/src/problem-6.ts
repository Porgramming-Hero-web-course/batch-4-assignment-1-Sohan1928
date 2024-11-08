{
  //
  interface Profile {
    name: string;
    age: number;
    email: string;
  }

  function updateProfile(
    profile: Profile,
    profileUpdate: Partial<Profile>
  ): Profile {
    return { ...profile, ...profileUpdate };
  }

  const myProfile: Profile = {
    name: "Alice",
    age: 25,
    email: "alice@gmail.com",
  };
  //   console.log(
  //     updateProfile(myProfile, { age: 30, name: "John", email: "john@gmail.com" })
  //   );

  //
}
