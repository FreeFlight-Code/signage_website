import React, {Component} from 'react';
import YTubeFrame from './YTubeFrame';
import ads from './AdProgram';

import videos from '../Buildings/videoData_Simustream.json';

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
        if(ads.get()){
            ads.runProgram();
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

    async play(){
        console.log('play')
        await this.setState({
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

    // checkAds(){
    //     if(ads.currentVideo) return true;
    //     return false;
    // }

    nextVideo() {
        // console.log('next video')
        const { videoIndex, currentVideo } = this.state;
        let newIndex = videoIndex + 1;
        if (ads.currentVideo){
            console.log(ads.currentVideo)
            setTimeout(()=>{
                this.setState({
                    currentVideo: ads.currentVideo
                });
                this.nextVideo();
            }, currentVideo.delay * 1000)
        } else
        if (newIndex === videos.length){
            // console.log('last video')
            this.start();

        } else {
            setTimeout(()=>{
                this.setState({
                    videoIndex: newIndex,
                    currentVideo: videos[newIndex]
                });
                this.nextVideo();
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