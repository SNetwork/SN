import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { View,ListView } from 'react-native';
import { createdeventsFetch } from '../actions';
import { Background,Card,LoginSection,Input,Button } from './common';
import CreatedItem from './CreatedItem';

class Created extends Component {
    componentWillMount() {
        this.props.createdeventsFetch();

       this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        // nextProps are the next set of props that this component 
        // will be rendered with 
        // this.props is still the old set of props

        this.createDataSource(nextProps);
    }

    createDataSource ({ createdevents }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(createdevents);
    }
    
    renderRow(createdevent) {
        return (
        <CreatedItem createdevent={createdevent} />
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
    const createdevents = _.map(state.createdevents, (val, uid) => {
      return { ...val, uid };
  });
    return { createdevents };
  };
  
  export default connect(mapStateToProps, { createdeventsFetch })(Created);