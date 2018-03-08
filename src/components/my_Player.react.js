import React, { Component, PropTypes } from 'react';
// import { PrismCode } from 'react-prism';
import ReactPlayer from 'react-player';



// const sources = {
//   bunnyMovie: 'http://media.w3.org/2010/05/bunny/movie.mp4',
//     sailingMovie : '2017 Rolex Sydney Hobart Live Broadcast replay.mp4'
//     sailingMovie : 'file:///Users/ianburns/Documents/Code-Dev/PycharmProjects/react-video-component/2017 Rolex Sydney Hobart Live Broadcast replay.mp4'
// };

export default class my_Player extends Component {
  constructor(props, context) {
    super(props, context);
    // this.propsToState = this.propsToState.bind(this);
    // this.postUpdate = this.postUpdate.bind(this);
    this.getCurrentTime = this.getCurrentTime.bind(this);
    this.myTimer = this.myTimer.bind(this);
    this.myVar = setInterval(this.myTimer, 500);
  }

  //   //********
  //  propsToState(newProps) {
  //       /*
  //        * state includes:
  //        * - user modifiable attributes
  //        */
  //       // const {setProps, fireEvent} = this.props;
  //       // const {setProps} = this.props;
  //       // // const props = this.refs.player.props
  //       const newState = {};
  //       const currTime_now = this.refs.player.getCurrentTime();
  //       this.props['currTime'] = currTime_now
  //       // setProps({currTime: currTime_now});
  //       console.log('current Time in setProps = ' + String(currTime_now));
  //       this.postUpdate()
  //       // const my_Props = [
  //       //     'volume',
  //       // ]
  //       for(var prop in newProps) {
  //       // newProps.forEach(prop => {
  //           if (newProps[prop] !== undefined){
  //               switch (prop) {
  //                   // case 'muted':
  //                   //     console.log('in muter ');
  //                   //     this.props.muted = newProps[prop];
  //                   //     var x = newProps[prop];
  //                   //     console.log('in muted update = ' +  String(x) );
  //                   //     break;
  //                   // case 'volume':
  //                   //     console.log('BEFORE player volume = ' + String(this.refs.player.volume));
  //                   //     this.refs.player.volume = newProps['volume'].toFixed(1)
  //                   //     console.log(' AFTER player volume = ' + String(this.refs.player.volume));
  //                   //     break;
  //                   // case 'playbackRate':
  //                   //     console.log('BEFORE playbackRATE = ' + String(this.refs.player.playbackRate));
  //                   //     this.refs.player.playbackRate = newProps['playbackRate'].toFixed(1)
  //                   //     console.log(' AFTER playbackRate = ' + String(this.refs.player.playbackRate));
  //                   //     break;
  //                   case 'seekTo':
  //                       //console.log('BEFORE seek = ' + String(newProps['seekTo']));
  //                       this.refs.player.seekTo(newProps['seekTo']);
  //                       //console.log(' AFTER seek = ');
  //                       break;
  //                   // case prop:
  //                   //     console.log(' in case current Time = ' + String(currTime));
  //                   //     setProps({currentTime: currTime});
  //                   //     break;
  //                   default:
  //                        newState[prop] = newProps[prop];
  //               }
  //           }
  //       }
  //
  //  }
  // //
  // componentDidMount() {
  // //   // subscribe state change
  // //   //this.refs.player.subscribeToStateChange(this.handleStateChange.bind(this));
  //   const currTime_now = this.refs.player.getCurrentTime();
  //   console.log('currTime in did Mount ' + String(currTime_now))
  //   this.props['currTime'] = currTime_now
  //   // this.refs.player.setProps(currTime : 0)
  // }

    // componentWillReceiveProps(newProps) {
    //     // this.propsToState(newProps)
    //     // this.postUpdate(newProps)
    //     this.getCurrentTime(newProps)
    // }



    myTimer() {
    //  Console.log(' in myTimer ' + String(this.myVar) )
        this.getCurrentTime()
    }

    getCurrentTime(){
      // Console.log(' in postUpdate '  )
        // const {fireEvent} = this.props;
        const {setProps, fireEvent} = this.props;
        const currTime_now = this.refs.player.getCurrentTime();
      //  Console.log('currTime in postUpdate ' + String(currTime_now))
        if (setProps  !== null) {
      //      Console.log(' in in setProps ')
            setProps({currTime: currTime_now});
        }

        if (fireEvent) {
       //     Console.log('in FireEvent ' )
            fireEvent('change');
        }

    }

    // componentDidUpdate(prevProps, prevState){
    //    console.log(' in postUpdate ' + String(prevState) + String(prevProps) )
    //     const {setProps, fireEvent} = this.props;
    //     const currTime_now = this.refs.player.getCurrentTime();
    //     console.log('currTime in postUpdate ' + String(currTime_now))
    //     if (setProps  !== null) {
    //         setProps({currTime: currTime_now});
    //     }
    //
    //     if (fireEvent) {
    //          console.log('in change ' )
    //         fireEvent('change');
    //     }
    //
    // }


  render() {
      const{
          url,
          width,
          height,
          playing,
          playsInline,
          playbackRate,
          muted,
          volume
      } = this.props;


      // return <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing />
              // <url={this.state.source} />
        //       <pre>
        //   <PrismCode className="language-json">
        //     {JSON.stringify(this.state.player, null, 2)}
        //   </PrismCode>
        // </pre>


    return (

      <div>

        <ReactPlayer
          ref="player"

          getCurrentTime={this.getCurrentTime}
          width={width}
          height={height}
          url={url}
          playing={playing}
          playsInline={playsInline}
          playbackRate={playbackRate}
          muted={muted}
          volume={volume}

          controls = {true}
        >
        </ReactPlayer>

        <div>State</div>
              'URL = ' {url}
          '   Playing = '  {playing}
      </div>

    );
  }
}

my_Player.propTypes = {

	id: PropTypes.string,

    /**
     * width of video player
     */
      width: PropTypes.number,

    /**
     * height of video player
     */
      height: PropTypes.number,

    /**
     * src of video
     */
      url: PropTypes.string,

    /**
     * set true of false to start stop playing
     */
     playing: PropTypes.bool,


    /**
     * inline player
     */
      playsInline: PropTypes.bool,

       /**
     * SHow Controls?
     */
      controls: PropTypes.bool,


     /**
     * set playback rate - useful! multiple of normal = 1
     */
      playbackRate: PropTypes.number,

    /**
     * muted or not
     */
      muted: PropTypes.bool,

    /**
     * preset volume set number
     */
      volume: PropTypes.number,

    /**
     * seek time of video seconds
     */
      seekTo: PropTypes.number,

    /**
     *  curentTime from video
     */
      currTime: PropTypes.number,

    /**
     *  curentTime from video
     */
      getCurrentTime: PropTypes.number,


    /**
     * Dash-assigned callback that should be called whenever any of the
     * properties change
     */
    setProps: PropTypes.func,

    /**
     * Dash-assigned callback that gets fired when the value changes.
     */
    // dashEvents: PropTypes.oneOf(['click','change'])
    dashEvents: PropTypes.oneOf(['change'])


};


