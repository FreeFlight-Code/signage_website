import adData from '../Buildings/videoData_Ads.json';

const ads = {
    get: function () {
        if (adData.length){
            return adData;
        } else return false;
    },
    runProgram: function () {
        let adArray = [];

        function createAdArray (){
            for (let i = 0; i < adData.length; i++){
                for (let j = 0; j < adData[i].adsPerDay; j++){
                    adArray.push(adData[i]);
                }
            }
        }

        function randomNum (max){
            return Math.floor(Math.random() * Math.floor(max));
        }
        createAdArray();
        for (let a = 0; a < adArray.length; a++){
            let i = adArray[randomNum(adArray.length)]
            //set random timer to first video
            setInterval(()=>{
                console.log(adArray)
                //set video
                this.currentVideo = adArray[i];
                //delete video from array
                adArray.splice(i, 1);
            }, 10000)



        }
        this.currentVideo = null;
    },
    currentVideo: {}
}
export default ads;