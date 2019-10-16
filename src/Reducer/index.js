import { Add, Complet, Delete,Edit } from "../Const";

const initstate = [];

const Reducer = (state = initstate, action) => {
  switch (action.type) {
    case Add:
      return state.concat(action.payload);

    case Delete:
      return state.filter(e => e.key !== action.payload);
    case Complet:
      return state.map(e =>
        e.key === action.payload ? { ...e, completed: !e.completed } : e
      );
      case Edit:
          return state.map(e =>
            e.key === action.payload.id ? { ...e, edit: !e.edit,title:action.payload.titre  } : e
          );
    default:
      return state;
  }
};

export default Reducer;
