var React = require('react'),
  TopNav = require('./TopNav'),
  SideNav = require('./SideNav');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var AppCanvas = mui.AppCanvas;

var App = React.createClass({

  mixins: [Router.State],
  openSideNav: function () {
    this.refs.sideNav.open();
  },
  render: function() {

    var title =
      this.context.router.isActive('get-started') ? 'Get Started' :
        this.context.router.isActive('css-framework') ? 'Css Framework' :
          this.context.router.isActive('components') ? 'Components' : '';

    return (
    <AppCanvas predefinedLayout={1}>
      <TopNav onTap = {this.openSideNav} />
      <SideNav ref="sideNav"/>
      <div>
        <h1>{title}</h1>
      </div>

       <RouteHandler />

    </AppCanvas>
    );
  }


});

module.exports = App;
