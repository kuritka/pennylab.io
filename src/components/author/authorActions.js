import * as actionTypes from '../../actionTypes';
import authorApi from '../../api/mockAuthorApi';

export function loadAuthorSuccess (authors) {
    //debugger;
    return {type: actionTypes.LOAD_AUTHORS_SUCCESS, authors}
}

export function loadAuthors(){
  return function(dispatch) {
    return authorApi.getAllAuthors().then(authors => {
      dispatch(loadAuthorSuccess(authors))
    }).catch(error => {throw(error);});
  }
}