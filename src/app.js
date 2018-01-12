import { BrowserRouter as Router, Route} from 'react-router-dom';
import Frame from 'frame/Frame'

require('common/css/index.css');

axios.defaults.timeout = 6000;
axios.defaults.baseURL = 'https://musicApi.hugangqiang.com';
/* axios({
    url: '/search',
    method: 'GET',
    params: {
        keywords: '海阔天空'
    }
}).then( (res) => {
    console.log(res)
}) */


ReactDOM.render(
    <Router>
        <div>
            <Route path="/" component={Frame} />
        </div>
    </Router>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept();
}
