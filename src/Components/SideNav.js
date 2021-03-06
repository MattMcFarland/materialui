var
  React = require('react'),
  Router = require('react-router'),
  mui = require('material-ui'),

  menuItems = [
    { route: 'home', text: 'Home' },
    { route: 'get-started', text: 'Get Started' },
    { route: 'css-framework', text: 'CSS Framework' },
    { route: 'components', text: 'Components' },
    { type: mui.MenuItem.Types.SUBHEADER, text: 'Resources' },
    { type: mui.MenuItem.Types.LINK, payload: 'https://github.com/callemall/material-ui', text: 'GitHub' },
    { type: mui.MenuItem.Types.LINK, payload: 'http://facebook.github.io/react', text: 'React' },
    { type: mui.MenuItem.Types.LINK, payload: 'https://www.google.com/design/spec/material-design/introduction.html', text: 'Material Design' }
  ];

var SideNav = React.createClass({

  mixins: [Router.Navigation, Router.State],

  getInitialState: function() {
    return {
      selectedIndex: null
    };
  },

  render: function() {
    var header = <div className="logo" onClick={this._onHeaderClick}>material ui</div>;

    return (
      <mui.LeftNav
        ref="leftNav"
        docked={false}
        isInitiallyOpen={false}
        header={header}
        menuItems={menuItems}
        selectedIndex={this._getSelectedIndex()}
        onChange={this._onLeftNavChange} />
    );
  },

  toggle: function() {
    this.refs.leftNav.toggle();
  },

  open: function() {
    this.refs.leftNav.open();
  },


  _getSelectedIndex: function() {
    var currentItem;

    for (var i = menuItems.length - 1; i >= 0; i--) {
      currentItem = menuItems[i];
      if (currentItem.route && this.context.router.isActive(currentItem.route)) return i;
    }
  },

  _onLeftNavChange: function(e, key, payload) {
    this.context.router.transitionTo(payload.route);
  },

  _onHeaderClick: function() {
    this.context.router.transitionTo('root');
    this.refs.leftNav.close();
  }

});

module.exports = SideNav;
