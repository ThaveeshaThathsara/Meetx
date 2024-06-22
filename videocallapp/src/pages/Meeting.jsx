import React, { useEffect, useRef } from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

function randomID(len) {
  let result = '';
  const chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP';
  const maxPos = chars.length;
  for (let i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return result;
}

export function getUrlParams(url = window.location.href) {
  let urlStr = url.split('?')[1];
  return new URLSearchParams(urlStr);
}

const Meeting = () => {
  const roomID = getUrlParams().get('roomID') || randomID(5);
  const elementRef = useRef(null);

  useEffect(() => {
    const initMeeting = async () => {
      const appID = 1850457710;
      const serverSecret = "7034fa9cdacec31b816e026c050a9120";
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, randomID(5), randomID(5));

      const zp = ZegoUIKitPrebuilt.create(kitToken);
      zp.joinRoom({
        container: elementRef.current,
        sharedLinks: [
          {
            name: 'Personal link',
            url: `${window.location.protocol}//${window.location.host}${window.location.pathname}?roomID=${roomID}`,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.GroupCall,
        },
      });
    };

    initMeeting();

    // Clean-up function
    return () => {
      // Implement any necessary clean-up logic here
    };
  }, [roomID]);

  return (
    <div className="h-screen w-screen overflow-hidden">
      <div ref={elementRef} className="w-full h-full"></div>
    </div>
  );
};

export default Meeting;
