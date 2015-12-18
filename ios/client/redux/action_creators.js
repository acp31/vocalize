import * as types from './action_constants';
import axios from 'axios';
import { pushState } from 'redux-react-router';



export function setState(state){//x
  return {
    type: types.SET_STATE,
    data: state
  }
}


function receiveNewWord(json) {
  return{
    type: types.RECEIVE_NEW_WORD,
    data: json
  }
};


function requestNextWord(word){ //x
  return {
    type: types.REQUEST_NEXT_WORD,
    data: word,
  }
}

export function fetchWord(){
 const language = 'language=' + this.state.language; //firgure out about this in redux
 const gender = 'gender=' + this.state.gender;
 const url = '/api/words/index/?' + language + '&' + gender;

  return function(dispatch) {
    return axios.({
      method: 'get',
      url: url,
      responseType: 'json'
    })
      .then(function(response) {
        dispatch(requestNextWord(response.data));
      })
  }
}

export function setInitalState(){
 const language = 'language=' + this.state.language; //firgure out about this in redux
 const gender = 'gender=' + this.state.gender;
 const url = '/api/words/index/?' + language + '&' + gender;

  return function(dispatch) {
    return axios.({
      method: 'get',
      url: url,
      responseType: 'json'
    })
      .then(function(response) {
        dispatch(setState(response.data));
      })
  }
}



export function postWord(){
}
























