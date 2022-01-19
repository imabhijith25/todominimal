export const AddItem = (data) => {
  return {
    type: "ADD_ITEM",
    payload: data
  };
};

export const updateItem = (data) => {
  return {
    type: "MARK_COMPLETE",
    payload: data
  };
};

export const markIncomplete = (data) => {
  return {
    type: "MARK_INCOMPLETE",
    payload: data
  };
};

export const selected = (data) => {
  return {
    type: "SELECTED",
    payload: data
  };
};

export const unselected = (data) => {
  return {
    type: "UNSELECTED",
    payload: data
  };
};

export const deleteValues = () => {
  return {
    type: "DELETE_VALUES"
  };
};
