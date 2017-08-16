import Router from 'next/router';

const handler = () => Router.push({
    pathname: '/about',
    query: { name: 'Zeit' }
});

// routeChangeStart(url) routeChangeComplete(url) routeChangeError(err, url) beforeHistoryChange(url) appUpdated(nextRoute)

Router.onRouteChangeStart = (url) => {
    console.log('onRouteChangeStart');
};

Router.routeChangeComplete = (url) => {
    console.log('routeChangeComplete');
}

Router.routeChangeError = (err, url) => {
    console.log('routeChangeError');
}

Router.beforeHistoryChange = (url) => {
    console.log('before changing the browser history');
}

Router.routeChangeComplete = (url) => {
    console.log('routeChangeComplete');
}

// 当用完的时候，可以将其解绑
Router.onRouteChangeStart = null;


const Index = () => (
    <div>
        <button onClick = {handler}>Go to About Page</button>
        {Router.prefetch('/about')}
        <p>Hello Next.js</p>
    </div>
)

export default Index;