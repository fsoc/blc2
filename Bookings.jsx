Table = React.createClass({
  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      bookings: Bookings.find({}).fetch()
    }
  },
  render() {
    return  (
      <div>
      <h1>bookings:</h1>
      {
        this.data.bookings.map((task) => {
          return (<p>{task._id} {task.text} {moment(task.createdAt).format()}</p>);
        })
      }
        </div>
      );
  }
});
