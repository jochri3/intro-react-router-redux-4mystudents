const users = [
  {
    id: 1,
    slug: "christian-lisangola",
    age: 78,
    fname: "Christian",
    lname: "Lisangola"
  },
  {
    id: 2,
    slug: "lance-armstrong",
    age: 45,
    fname: "Lance",
    lname: "Armstrong"
  },
  {
    id: 3,
    slug: "alberto-contador",
    age: 38,
    fname: "Alberto",
    lname: "Contador"
  }
];

//Action creators
export const fetchUsers = () => {
  return {
    type: "FETCH_USERS",
    payload: users
  };
};

export const fetchUser = slug => {
  return {
    type: "FETCH_USER",
    payload: users.find(user => user.slug === slug)
  };
};
