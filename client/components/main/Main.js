import React, {Component} from 'react'
import Wad from 'web-audio-daw'
import Sing from './Sing'
import Webcam from './webcam'
import Score from './score'
import Logo from '.././home/logo'
import {connect} from 'react-redux'
import {selectSong, getSingScore} from '../../store/song'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      song: new Wad({source: '/songs/dancingqueen.m4a'})
    }
    this.danceDancePoseTime = this.danceDancePoseTime.bind(this)
  }

  danceDancePoseTime = () => {
    this.sing.handlePitchLogger()
    this.dance.startTimer()
  }

  render() {
    return (
      <div>
        <Logo />
        {/* <Score /> */}
        <div className="Lyrics">
          <Sing
            onRef={ref => (this.sing = ref)}
            song={this.state.song}
            sing={this.props.sing}
          />
        </div>
        <div>
          <Webcam onRef={ref => (this.dance = ref)} song={this.state.song} />
          <button className="button" onClick={this.danceDancePoseTime}>
            {' '}
            LET'S GO{' '}
          </button>
          {/* <Sing
          onRef={ref => (this.sing = ref)}
          song={this.state.song}
          sing={this.props.sing}
        /> */}
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  selectedSong: state.song.selectedSong,
  singScore: state.song.singScore,
  loading: state.bubble.loading
})

const mapDispatch = {selectSong, getSingScore}

export default connect(mapState, mapDispatch)(Main)
