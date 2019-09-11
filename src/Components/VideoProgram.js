import React, {Component} from 'react';
import YTubeFrame from './YTubeFrame';

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
        if(!this.props.videos.length) throw "no data found";
        try{
            if(this.props.videos.length) return true
        }
        catch (e){
            console.log(e);
        }
    }

    videoIndexIsGood(){
        if(this.state.videoIndex > -1 && this.state.videoIndex < this.props.videos.length){
            return true;
        } else return false
    }


    async start(){
        await this.setState({
            videoIndex: 0,
            currentVideo: this.props.videos[0],
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
        let newIndex = ++this.state.videoIndex

        // if last video, repeat
        if(this.state.videoIndex === this.props.videos.length){
                this.start();

        // go to next video
        } else {
            this.setState({
                videoIndex: newIndex,
                currentVideo: this.props.videos[newIndex]
              });
            setTimeout(()=>{
                  this.nextVideo();
            }, this.state.currentVideo.delay * 1000)
        }
    
    }
  
    render() {
        if (this.state.currentVideo && this.state.currentVideo.url){
            return (
              < YTubeFrame video={this.state.currentVideo}/>
            );

        } else {
            return (
                null
            )
        }
    }
  }