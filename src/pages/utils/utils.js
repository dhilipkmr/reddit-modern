export function findCount(val){
  if (val < 1000) {
    return val;
  } else {
    return (Math.round((val / 1000) * 10) / 10) + 'K';
  }
}

export function publishedTime(utc) {
  const postDate = new Date(utc * 1000);
  const now = new Date();
  if (now.getFullYear() === postDate.getFullYear()) {
    if (now.getMonth() === postDate.getMonth()) {
      if(now.getDate() === postDate.getDate()) {
        return (now.getHours() - postDate.getHours() + ' hours ago ');
      } else {
        const day = parseInt(now.getDate() - postDate.getDate(), 10);
        if (day === 1) {
          return (24 + now.getHours() - 17) + ' hours ago ';
        }
        return (day + 'days ago ');
      }
    } else {
      const month = parseInt(now.getMonth() - postDate.getMonth(), 10);
      return (month + (month === 1 ? ' month ' : 'months ') + ' ago ');
    }
  } else {
    const year = parseInt(now.getFullYear() - postDate.getFullYear(), 10);
    return (year + (year === 1 ? ' year ' : 'years ') + ' ago ');
  }
}