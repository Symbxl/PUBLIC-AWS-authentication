import { withAuthenticator } from "@aws-amplify/ui-react";
import { useState } from "react";
import { DataStore } from "@aws-amplify/datastore";
import { Data } from "./models";

function App({ signOut, user }) {
  const [data, setData] = useState();

  (async () => {
    const userData = await DataStore.query(Data);
    setData(userData);
  })();

  return (
    <>
      <> {user.attributes.email} </>
      <button onClick={signOut}>signout</button>
      {data?.map((item) => (
        <div key={item.id}>
          <p>{item?.name}</p>
          <p>{item?.email}</p>
        </div>
      ))}
    </>
  );
}

export default withAuthenticator(App);
