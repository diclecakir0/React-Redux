# State Management

- State: The properties and information that components possess within the application.

- Prop Drilling: The method of passing data from parent to child components through props.

- Context API: A centralized state management tool for managing states in the application.

- Redux: Allows necessary states owned by components in the application to be stored in a centralized store.

# Why do we use Redux?

- Prevents code duplication.
- Improves performance.
- Reduces complexity within components.
- Makes state management easier and more understandable.

# Things to Know

1. Store: A central state that can be accessed and modified by all components of the application

2. Action: The data we send to the reducer to update the store.

- - It is an object with 2 values;
- - type: A string that defines the purpose of the action.
- - payload: The value we send along with the action to the reducer, containing data related to the action.

3. Dispatch: A method that allows us to notify the reducer that actions have occurred.

4. Reducer: Analyzes the dispatched actions based on their type values and updates the store.

5. Subscribe: Redux stores the application state in a central repository (store). When components need to access this state, the useSelector hook is used.

- Note: If Redux is used for state management while using an API in the project, we must keep both in sync.

# Kurulum

- The redux and react-redux packages are installed.
- A reducer to be used in the store is created.
- The store is created.
- The store is integrated into the project.

# React-Redux
