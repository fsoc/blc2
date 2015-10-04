App = React.createClass({
  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],
  getInitialState: function() {
    return { counter: 0 };
  },
  getMeteorData() {
    return {
      bookings: Bookings.find({}).fetch()
    }
  },
  handleSubmit: function(e) {
    e.preventDefault();
    this.setState({ counter: this.state.counter + 1 });
  },
  render() {
    return (
      <div>
      <button className="btn btn-success" onClick={this.handleSubmit} >Click Me</button>
      <p>You've pressed the button {this.state.counter} times.</p>
    <h1>bookings:</h1>
    {
      this.data.bookings.map((task) => {
        return (<p>{task._id} {task.text} {moment(task.createdAt).format()}</p>);
      })}
      </div>

      );
  }
});
