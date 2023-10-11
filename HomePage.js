import {useEffect} from 'react';
import Video from './components/Video';

function Homepage() {
  
  const videolinks=['https://scontent.xx.fbcdn.net/v/t42.3356-2/367970633_6559599160773402_8220661390576667831_n.mp4?_nc_cat=105&ccb=1-7&_nc_sid=060d78&_nc_ohc=-lh9EBrjdBoAX8nNDoP&_nc_ht=scontent.xx&oh=03_AdTevnCHtvMSzuUBSu8WmIaoIwHAiodB-G4a4nLthQ3WYQ&oe=6525C27E&dl=1',
                    "https://scontent.xx.fbcdn.net/v/t42.3356-2/18173771_1673670846272881_1230252266217275392_n.mp4/video-b0a736c4-1bf5-40cc-921a-6ca54b340360-1691285099.mp4?_nc_cat=102&ccb=1-7&_nc_sid=060d78&_nc_ohc=_jap4S5hrDAAX-6h3oc&vabr=600299&_nc_ht=scontent.xx&oh=03_AdTOR9heMtFbHvHTIKszpn3ifIhXh_5uxJtwwI39kdMxdA&oe=652641BA&dl=1"];
  
  return (
    <div  className='flex flex-col items-center snap-y snap-mandatory overflow-scroll h-[calc(100vh-74px)] overflow-x-hidden'>
      <Video videolink={videolinks[0]}/>
      <Video videolink={videolinks[1]}/>
    </div>
    
  );
}

export default Homepage;