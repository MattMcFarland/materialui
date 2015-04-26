var React = require('react'),
  mui = require('material-ui');

var GetStarted = React.createClass({

  render: function() {
    return (
      <div className="get-started-page mui-app-content-canvas">
        <div className="full-width-section">

          <h2 className="mui-font-style-headline">Prerequisites</h2>
          <p>
            We recommend that you get started with the <a href="http://facebook.github.io/react/">React Library</a> before diving into
            material-ui for a better understanding. Should you choose to skip this, don&apos;t worry, we&apos;ll explain relevant React concepts as
            they come along.
          </p>


        </div>
      </div>
    );
  }

});

module.exports = GetStarted;
