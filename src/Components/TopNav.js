React = require('react'),
  mui = require('material-ui'),
  AppBar = mui.AppBar;

var TopNav = React.createClass({

  render: function() {
    return (
      <AppBar
        title="My App"
        onMenuIconButtonTouchTap={this.props.onTap}
        />
    );
  }

});

module.exports = TopNav;
