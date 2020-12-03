export function handleNoti(data){
    const {message, nickname} = data;
    console.log( `${nickname} : ${message}` )
}