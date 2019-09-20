import React, {Component} from 'react';
import YTubeFrame from './YTubeFrame';

import videos from '../Buildings/videoData_Simustream.json';

export default class VideoProgram extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoIndex: 0,
            currentVideo: {}, 
            running: false,
            ended: true
        };
    }
    
    componentDidMount() {
        if(this.checkVideo()){
            this.start();
        };
    }

    checkVideo(){
        if(this.hasVideoData() &&  this.videoIndexIsGood()){
            return true
        }
    }

    hasVideoData(){
        if(!videos.length) throw "no data found";
        try{
            if(videos.length) return true
        }
        catch (e){
            console.log(e);
        }
    }

    videoIndexIsGood(){
        if(this.state.videoIndex > -1 && this.state.videoIndex < videos.length){
            return true;
        } else return false
    }


    async start(){
        await this.setState({
            videoIndex: 0,
            currentVideo: videos[0],
            ended: false,
            running: true
        });
        setTimeout(() => {
            this.nextVideo();
        }, this.state.currentVideo.delay * 1000);
    }

    play(){
        this.setState({
            running: true
        });
        this.nextVideo();
    }

    playPause(){
        this.setState({
            running: !this.state.running
        })
    }

    stop(){
        console.log('stop')
        this.setState({
            ended: true
        })
    }

    nextVideo(reset) {
        console.log('next video')
        let newIndex = this.state.videoIndex + 1;

        // if last video, repeat
        if(newIndex === videos.length){
            console.log('last video')
            this.start();

        // go to next video
        } else {
            this.setState({
                videoIndex: newIndex,
                currentVideo: videos[newIndex]
              });
            setTimeout(()=>{
                  this.nextVideo();
            }, this.state.currentVideo.delay * 1000)
        }
    
    }
  
    render() {
        const { currentVideo } = this.state;
            return (
              currentVideo && < YTubeFrame video={currentVideo}/>
            );
    }
  }