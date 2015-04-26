var React = require('react'),
  mui = require('material-ui');

var FlatButton = mui.FlatButton;
var RaisedButton = mui.RaisedButton;
var FloatingActionButton = mui.FloatingActionButton;
var FontIcon = mui.FontIcon;
var Paper = mui.Paper;
var Toggle = mui.Toggle;
var RadioButtonGroup = mui.RadioButtonGroup;
var RadioButton = mui.RadioButton;
var Checkbox = mui.Checkbox;
var Home = React.createClass({

  render: function() {
    return (
      <div className="get-started-page mui-app-content-canvas">
        <div className="full-width-section">
          <h2 className="mui-font-style-headline">Home Page</h2>
          <table>
            <thead>
              <tr><th>Flat</th><th>Raised</th><th>Floating</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><FlatButton label="Default" /></td>
                <td><RaisedButton label="Default" /></td>
                <td><FloatingActionButton iconClassName="fa fa-star" /></td>
              </tr>
              <tr>
                <td><FlatButton label="Primary" primary={true} /></td>
                <td><RaisedButton label="Primary" primary={true} /></td>
                <td><FloatingActionButton iconClassName="fa fa-star" /></td>
              </tr>
              <tr>
                <td><FlatButton label="Secondary" secondary={true} /></td>
                <td><RaisedButton label="Secondary" secondary={true} /></td>
                <td><FloatingActionButton iconClassName="fa fa-star"secondary={true} /></td>
              </tr>
              <tr>
                <td><FlatButton label="Disabled" disabled={true} /></td>
                <td><RaisedButton label="Disabled" disabled={true} /></td>
                <td><FloatingActionButton iconClassName="fa fa-star" disabled={true} /></td>
              </tr>
            </tbody>
          </table>
          <h3>Image Buttons</h3>
          <p>
            <FlatButton secondary={true}>
              <span className="mui-flat-button-label example-image-button">Choose an Image</span>
              <input type="file" className="example-image-input"/>
            </FlatButton>
            <RaisedButton secondary={true}>
              <span className="mui-raised-button-label example-image-button">Choose an Image</span>
              <input type="file" className="example-image-input"/>
            </RaisedButton>
          </p>
          <p>
          <h3>Link Button</h3>
            <FlatButton linkButton={true} href="https://github.com/callemall/material-ui" secondary={true}>
              <FontIcon className="fa fa-github"/>
              <span className="mui-flat-button-label">Github</span>
            </FlatButton>
          </p>
          <h3>Paper</h3>
          <Paper className="paperDemo" zDepth={1}>
            <p>zDepth=1</p>
          </Paper>
          <Paper className="paperDemo" zDepth={2}>
            <p>zDepth=2</p>
          </Paper>
          <Paper className="paperDemo" zDepth={3}>
            <p>zDepth=3</p>
          </Paper>
          <Paper className="paperDemo" zDepth={4}>
            <p>zDepth=4</p>
          </Paper>
          <Paper className="paperDemo" zDepth={5}>
            <p>zDepth=5</p>
          </Paper>
          <h4>Sharp Corners</h4>
          <Paper className="paperDemo" zDepth={1} rounded={false}>
            <p>rounded=false</p>
          </Paper>
          <Paper className="paperDemo" zDepth={2} rounded={false}>
            <p>rounded=false</p>
          </Paper>
          <Paper className="paperDemo" zDepth={3} rounded={false}>
            <p>rounded=false</p>
          </Paper>
          <Paper className="paperDemo" zDepth={4} rounded={false}>
            <p>rounded=false</p>
          </Paper>
          <Paper className="paperDemo" zDepth={5} rounded={false}>
            <p>rounded=false</p>
          </Paper>
          <h4>Circular</h4>
          <Paper className="paperDemo" zDepth={1} circle={true}>
            <p>circle=true</p>
          </Paper>
          <Paper className="paperDemo" zDepth={2} circle={true}>
            <p>circle=true</p>
          </Paper>
          <Paper className="paperDemo" zDepth={3} circle={true}>
            <p>circle=true</p>
          </Paper>
          <Paper className="paperDemo" zDepth={4} circle={true}>
            <p>circle=true</p>
          </Paper>
          <Paper className="paperDemo" zDepth={5} circle={true}>
            <p>circle=true</p>
          </Paper>
          <h3>Switches</h3>
          <h4>Checkbox</h4>
          <Checkbox
            name="checkboxName1"
            value="checkboxValue1"
            label="went for a run today" />
          <Checkbox
            name="checkboxName2"
            value="checkboxValue2"
            label="fed the dog"
            defaultSwitched={true} />
          <Checkbox
            name="checkboxName3"
            value="checkboxValue3"
            label="built a house on the moon"
            disabled={true} />

          <h4>Radio Buttons</h4>
          <RadioButtonGroup
            name="shipSpeed"
            defaultSelected="not_light">
            <RadioButton
              value="light"
              label="prepare for light speed" />
            <RadioButton
              value="not_light"
              label="light speed too slow"
              defaultChecked={true} />
            <RadioButton
              value="ludicrous"
              label="go to ludicous speed"
              disabled={true}/>
          </RadioButtonGroup>

          <h4>Toggle</h4>
          <div className="ToggleBox">
            <Toggle
              name="toggleName1"
              value="toggleValue1"
              label="activate thrusters" />
            <Toggle
              name="toggleName2"
              value="toggleValue2"
              label="auto-pilot"
              defaultToggled={true} />
            <Toggle
              name="toggleName3"
              value="toggleValue3"
              label="initiate self-destruct sequence"
              disabled={true} />
            </div>
        </div>
      </div>
    );
  }

});

module.exports = Home;
