import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { addKeepNote } from "./actions";
import Header from "./containers/Header";
import PageWrapper from "./components/PageWrapper";


const mapStateToProps = (state, ownProps) => {
        const lastIndex = state.keepNotes.length - 1;
        return {
            id: 1,
            title: 'Title' + ownProps.title,
            desc: state.keepNotes[lastIndex].desc || 'Desc',
            tags: [{
                id: 0,
                name: 'My'
            }],
            importancy: 1
        }
};

const mapDispatchToProps= (dispatch, ownProps) => {
    return {
        onWrapperClick: ({clientX}) => {
            console.log(clientX);
          dispatch(addKeepNote( {
                  title: 'Title' + ownProps.title,
                  desc: 'Description' + clientX,
                  tags: [{
                      name: 'My'
                  }],
                  importancy: 1
              })
          );
      }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PageWrapper);
