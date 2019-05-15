import React, { PureComponent } from "react";

import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";
import Person from "./Person/Person";

class Persons extends PureComponent {
  static getDerivedStateFromProps(props, state) {
    console.log("-----------------------------");
    console.log("[Persons.js] getDerivedStateFromProps", props);

    return state;
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("[Persons.js] shouldComponentUpdate", nextProps, nextState);
  //   if (
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate", prevProps, prevState);
    return { message: "Shapshot" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons.js] componentDidUpdate");
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log("[Persons.js] componentWillUnmount");
  }

  render() {
    console.log("[Persons.js] rendering...");

    return this.props.persons.map((person, index) => {
      return (
        <ErrorBoundary key={person.id}>
          <Person
            click={() => this.props.clicked(index)}
            name={person.name}
            age={person.age}
            changed={event => this.props.changed(event, person.id)}
          />
        </ErrorBoundary>
      );
    });
  }
}

export default Persons;
