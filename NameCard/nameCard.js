function Person(props) {
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>Job: {props.job}</p>
    </div>
  );
}

var app = (
  <div>
     <Person name="Hyunju" job="Full Stack Developer" />
      <Person name="Mok" job="Full Stack Developer" />
  </div>
);

ReactDOM.render(app, document.querySelector('#app'));
