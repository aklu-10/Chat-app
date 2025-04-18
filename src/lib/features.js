export const fileFormat = (url='') => {

    const fileExtension = url.split('.').pop();

    const validVideoExtensions = ['mp4', 'webm', 'ogg'];
    const validMusicExtensions = ['mp3', 'wav'];
    const validImageExtensions = ['png', 'jpg', 'jpeg', 'gif'];

    if(validVideoExtensions.includes(fileExtension)) return 'video';

    else if(validMusicExtensions.includes(fileExtension)) return 'audio';

    else if(validImageExtensions.includes(fileExtension)) return 'image';

    else return 'file';
}

// For 1000px image to show on 100px
export const transformImage = (url='', widdth=100) => url; 