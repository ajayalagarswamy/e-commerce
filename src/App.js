import './App.css';
import { Routing } from './Component/Routing/Routing';
import { Store } from "./Component/Store/Store"
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={Store}>
      <div>
        <Routing>

        </Routing>

      </div>
    </Provider>
  );
}

export default App;
