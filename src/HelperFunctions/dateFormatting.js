const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
export const dateFormatting =(date) =>{
    const mnth = ("0" + (date.getMonth() + 1)).slice(-2)
    const day = ("0" + date.getDate()).slice(-2)
    const resultMonth=months.find((mon,idx)=>date.getMonth()===idx)
    // console.log('date here',[day,resultMonth].join('-'))
    return [day,resultMonth].join('-')
}