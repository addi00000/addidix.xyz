setInterval(() => {
    const date = new Date();
    const month = date.toLocaleString('default', { month: 'long' });
    const day = date.getDate();
    const year = date.getFullYear();

    const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    const seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
    const miliseconds = date.getMilliseconds().toString().length !== 4 ? `0${date.getMilliseconds()}` : date.getMilliseconds();
    const timezone = date.toLocaleString('en-US', { timeZoneName: 'short' }).split(' ').pop();
    const formattedDate = `${month} ${day}${day > 3 && day < 21 || day % 10 > 3 ? 'th' : ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'][day % 10]}, ${year}`;
    const formattedTime = `${timezone}: ${hours}:${minutes}:${seconds}.${miliseconds}`;

    document.querySelector('.current-date').textContent = formattedDate;
    document.querySelector('.current-time').textContent = formattedTime;
}, 1);