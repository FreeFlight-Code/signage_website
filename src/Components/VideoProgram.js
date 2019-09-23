import React, {Component} from 'react';
import YTubeFrame from './YTubeFrame';

import videos from '../Buildings/videoData_Simustream.json';
import ads from '../Buildings/videoData_Ads.json';
// const videos = [];
// const ads = [];
export default class VideoProgram extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoIndex: 0,
            currentVideo: {}, 
            running: false
        };
    }
    
    componentDidMount() {
        if(this.checkData(videos)){
            // console.log('data found')
            this.start();
        };
        if(this.checkData(ads)){
            // console.log('ads found')
        };
    }

    checkData(data){
        if(this.hasData(data) &&  this.indexIsGood(data)){
            return true
        }
    }

    hasData(data){
        // if(!videos.length) throw "no data found";
        try{
            if(data.length) return true
        }
        catch (e){
            console.log(e);
        }
    }

    indexIsGood(data){
        if(this.state.videoIndex < data.length){
            return true;
        } else return false
    }


    async start(){
        await this.setState({
            videoIndex: 0,
            currentVideo: videos[0]
        });
        this.play();
    }

    play(){
        console.log('play')
        this.setState({
            running: true
        });
        this.nextVideo();
    }

    playPause(){
        if (this.state.running){
            this.stop();
        } else {
            this.play();
        }
    }

    stop(){
        console.log('stop')
        this.setState({
            running: false
        })
    }

    nextVideo() {
        console.log('next video')
        const { videoIndex, currentVideo, running } = this.state;
        let newIndex = videoIndex + 1;
        if (newIndex === videos.length){
            console.log('last video')
            this.start();

        } else {
            setTimeout(()=>{
                if(running){
                    this.setState({
                        videoIndex: newIndex,
                        currentVideo: videos[newIndex]
                    });
                    this.nextVideo();
                }
            }, currentVideo.delay * 1000)
        }
    }
  
    render() {
        const { currentVideo } = this.state;
            return (
                currentVideo && < YTubeFrame video={currentVideo}/>
            );
    }
  }