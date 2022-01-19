const initialvalues = () => {
  const storeitems = localStorage.getItem("values");
  if (storeitems != null) {
    return JSON.parse(storeitems).items;
  } else {
    return [];
  }
};
const initialState = {
  items: initialvalues(),
  indexs: new Set()
};

// const initialState = {
//   items: [

//   ],
//   indexs: new Set()
// };
/**
obj = {
  isComplete:true,
  content:" "
  id:1
}
 */

const initialstateSelected = {
  indexs: new Set()
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const newobj = action.payload;
      localStorage.setItem(
        "values",
        JSON.stringify({ ...state, items: [...state.items, newobj] })
      );
      return { ...state, items: [...state.items, newobj] };
    case "REMOVE_ITEM":
      return state;
    case "MARK_COMPLETE":
      const tempar = state.items;
      for (let i = 0; i < tempar.length; i++) {
        if (tempar[i].id === action.payload.id) {
          tempar[i].isComplete = true;
        }
      }
      state.indexs.add(action.payload.id);
      return { ...state, items: tempar };

    case "MARK_INCOMPLETE":
      const tempara = state.items;
      for (let i = 0; i < tempara.length; i++) {
        if (tempara[i].id === action.payload.id) {
          tempara[i].isComplete = false;
        }
      }
      state.indexs.delete(action.payload.id);
      return { ...state, items: tempara };

    // case "SELECTED":
    //   state.indexs.add(action.payload);
    //   console.log(state.indexs);
    //   return state;
    // case "UNSELECTED":
    //   state.indexs.delete(action.payload);
    //   console.log(state.indexs);
    //   return state;

    case "DELETE_VALUES":
      const arr = [...state.indexs];
      const secondArr = state.items;
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < secondArr.length; j++) {
          if (arr[i] === secondArr[j].id) {
            secondArr.splice(j, 1);
          }
        }
      }
      state.indexs.clear();
      localStorage.setItem(
        "values",
        JSON.stringify({ ...state, items: secondArr })
      );
      return { ...state, items: secondArr };

    default:
      return state;
  }
};

export const selectedReducer = (state = initialstateSelected, action) => {
  switch (action.type) {
    // case "SELECTED":
    //   state.indexs.add(action.payload);
    //   console.log(state.indexs);
    //   return state;
    // case "UNSELECTED":
    //   state.indexs.delete(action.payload);
    //   console.log(state.indexs);
    //   return state;

    default:
      return state;
  }
};
