import { atomFamily, selectorFamily } from "recoil";
import { TODOS } from "./todos";
import axios from "axios";

// <---------         ATOM FAMILY   -------------->

// export const todosAtomFamily = atomFamily({
//   key: 'todosAtomFamily',
//   default: id => {
//     return TODOS.find(x => x.id === id)
//   },
// });

// <------------- ATOM FAMILY AND SELECTOR FAMILY  ------------------->

export const todosAtomFamily = atomFamily({
  key: "todosAtomFamily",
  default: selectorFamily({
    key: "todosAtomFamilySelectorFamily",
    get: function (id) {
      return async function ({ get }) {
        const res = await axios.get(
          `https://sum-server.100xdevs.com/todo?id=${id}`
        );
        return res.data.todo;
      };
    },
  }),
});


