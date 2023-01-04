function UserList({ users }) {
  console.log(users);
  return (
    <>
      <h1>Users :</h1>
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </>
  );
}

export default UserList;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  //console.log(data);
  return {
    props: {
      users: data,
    },
  };
}