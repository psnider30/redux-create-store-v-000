function createStore(reducer) {
  let state;

  function dispatch(action) {
    state = reducer(state, action);
    render();
  }

  function getState() {
    return state;
  };

  dispatch({ type: '@@INIT' });

  return {
    dispatch,
    getState
  };
};

function changeCount(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return { count: state.count + 1 };

    default:
      return state;
  }
}


function render() {
  let container = document.getElementById('container');
  var counter = store ? store.getState().count : 0
  container.textContent = counter;
};

var store = createStore(changeCount) // createStore takes the changeCount reducer as an argument
button = document.getElementById('button');

button.addEventListener('click', function() {
  store.dispatch({ type: 'INCREASE_COUNT' });
});
