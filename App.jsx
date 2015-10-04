App = React.createClass({
  getInitialState: function() {
    return { counter: 0 };
  },
  handleSubmit: function(e) {
    e.preventDefault();
    this.setState({ counter: this.state.counter + 1 });
  },
  render() {
    return (
      <div>
      <button className="btn" onClick={this.handleSubmit} >Click Me</button>
      <p>You've pressed the button {this.state.counter} times.</p>
      </div>

      );
  }
});
