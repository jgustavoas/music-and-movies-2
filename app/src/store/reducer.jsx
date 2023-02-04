export default function dataReducer(data, action) {
  switch (action.type) {
    case 'LOAD': {
      return action.data;
    }
    // Dispatch the following CRUD actions only if first the API return successfully:
    case 'CREATE': {
      return [
        ...data,
        {
          id: action.id,
          // Include the rest of the data of the new record
        },
      ];
    }
    case 'UPDATE': {
      return data.map(d => {
        if (d.id === action.task.id) {
          return action.task;
        } else {
          return d;
        }
      });
    }
    case 'DELETE': {
      return data.filter(d => d.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
