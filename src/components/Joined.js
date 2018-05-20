import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { View,ListView } from 'react-native';
import { joinedeventsFetch } from '../actions';
import { Card, LoginSection,Input,  Button, Background } from './common';
import JoinedItem from './JoinedItem';

class Joined extends Component {
    componentWillMount() {
        this.props.joinedeventsFetch();

       this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        // nextProps are the next set of props that this component 
        // will be rendered with 
        // this.props is still the old set of props

        this.createDataSource(nextProps);
    }

    createDataSource ({ joinedevents }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(joinedevents);
    }
    
    renderRow(joinedevent) {
        return (
        <JoinedItem joinedevent={joinedevent} />
        );
    }

    render() {
       return(
           <Background>
                  <ListView 
                  enableEmptySections
                  dataSource={this.dataSource}
                  renderRow={this.renderRow}
                  />
           </Background>
       );
    }
}

const mapStateToProps = (state) => {
    const joinedevents = _.map(state.joinedevents, (val, uid) => {
      return { ...val, uid };
  });
    return { joinedevents };
  };
  
  export default connect(mapStateToProps, { joinedeventsFetch })(Joined);