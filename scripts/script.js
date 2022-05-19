if('serviceWorker' in navigator)
{
    navigator.serviceWorker.register('service-worker.js',{scope: '/week2/'}).then(function()
    {
        console.log('sw - ok');
    });
}