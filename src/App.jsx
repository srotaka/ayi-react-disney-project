import AppRoutes from './routes/AppRoutes';
import './assets/styles/style.css'
import { Provider } from 'react-redux';
import store from './redux/store/store';

function App() {
  return (
    <Provider store={store}>    
      <AppRoutes />
    </Provider>
  );
}

export default App;
