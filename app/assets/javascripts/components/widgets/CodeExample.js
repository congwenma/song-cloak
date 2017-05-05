// https://github.com/callemall/material-ui/blob/master/docs/src/app/components/CodeExample/index.js
import React, {Component} from 'react';
import {parse} from 'react-docgen';
import CodeBlock from './CodeBlock';
import ClearFix from 'material-ui/internal/ClearFix';
import Paper from 'material-ui/Paper';

class CodeExample extends Component {
  static propTypes = {
    children: React.PropTypes.node,
    code: React.PropTypes.string.isRequired,
    component: React.PropTypes.bool,
    description: React.PropTypes.string,
    exampleBlockStyle: React.PropTypes.object,
    layoutSideBySide: React.PropTypes.bool,
    title: React.PropTypes.string,
  };

  static defaultProps = {
    component: true,
  };

  static contextTypes = {
    muiTheme: PropTypes.object,
  };

  render() {
    const {
      children,
      code,
      component,
      exampleBlockStyle,
      layoutSideBySide,
    } = this.props;

    const palette = this.context.muiTheme.rawTheme.palette;
    const canvasColor = palette.canvasColor;

    const styles = {
      root: {
        backgroundColor: canvasColor,
        marginBottom: 32,
      },
      exampleBlock: {
        borderRadius: '0 0 2px 0',
        padding: '14px 24px 24px',
        margin: 0,
        width: layoutSideBySide ? '45%' : null,
        float: layoutSideBySide ? 'right' : null,
      },
    };

    const docs = component ? parse(code) : {};

    return (
      <Paper style={styles.root}>
        <CodeBlock
          title={this.props.title}
          description={this.props.description || docs.description}
        >
          {code}
        </CodeBlock>
        <ClearFix style={Object.assign(styles.exampleBlock, exampleBlockStyle)}>{children}</ClearFix>
      </Paper>
    );
  }
}

export default CodeExample;