import axios from 'axios';
import { pushState } from 'redux-react-router';
import {AudioRecorder, AudioPlayer} from 'react-native-audio'
import * as types from './action_constants';

const initalState =  {
      currentTime: 0.0,
      recording: false,
      stoppedRecording: false,
      stoppedPlaying: false,
      playing: false,
      finished: false
    };


function playWord(word){//x
  return {
    type: types.PLAY_WORD,
    data: word,
  }
}

function recordUserAudio(word){//x
  return {
    type: types.RECORD_USER_AUDIO,
    word,
  }
}

function stopUserRecording(word){//x
  return {
    type: types.STOP_RECORDING_USER_AUDIO,
    word,
  }
}

function sendUserRecording(word){//x
  return {
    type: types.SEND_RECORDING_USER_AUDIO,
    word,
  }
}

  
export function play(){

 AudioPlayer.playWithUrl()
}

export function record(){


}



export function stop(){
  if (this.state.recording) {
      AudioRecorder.stopRecording();
      this.setState({stoppedRecording: true, recording: false});
    } else if (this.state.playing) {
      AudioRecorder.stopPlaying();
      this.setState({playing: false, stoppedPlaying: true});
    }

}

//put this in the react native file
 componentDidMount() {
    AudioRecorder.prepareRecordingAtPath('/file.caf')
    AudioRecorder.onProgress = (data) => {
      this.setState({currentTime: Math.floor(data.currentTime)});
    };
    AudioRecorder.onFinished = (data) => {
      this.setState({finished: data.finished});
      console.log(`Finished recording: ${data.finished}`)
    };
  },
