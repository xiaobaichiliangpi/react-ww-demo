import React from 'react'
function logProps(WrappedComponent) {
  class LogProps extends React.Component {
    componentDidUpdate(prevProps) {
      console.log('old props:', prevProps);
      console.log('new props:', this.props);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return LogProps;
}

class FancyButton extends React.Component {
  focus() {
    // ...
    console.log(123)
  }

  render() {
    return <input type="text" defaultValue={this.props.value} ref={this.props.inputRef} />
  }
  // ...
}

// Rather than exporting FancyButton, we export LogProps.
// It will render a FancyButton though.
export default logProps(FancyButton);
// export default FancyButton;