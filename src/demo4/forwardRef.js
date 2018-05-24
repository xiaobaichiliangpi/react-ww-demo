import React from 'react'
function logProps(WrappedComponent) {
  class LogProps extends React.Component {
    componentDidUpdate(prevProps) {
      console.log('old props:', prevProps);
      console.log('new props:', this.props);
    }

    render() {
      const {forwardedRef, ...rest} = this.props
      return <WrappedComponent {...rest} ref={forwardedRef} />;
    }
  }

  function forwardRef (props, ref) {
    return <LogProps {...props} forwardedRef={ref} />
  }

  let componentName = WrappedComponent.displayName || WrappedComponent.name
  forwardRef.displayName = `logprops-${componentName}`

  return React.forwardRef(forwardRef);
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