import {Provider} from "react-redux"
import AppRouter from "./router/AppRouter";
import { store } from "./app/store";
import "./index.css"
function App() {
  return (
    <div>
      <Provider store={store}>
        <AppRouter/>
      </Provider>
      
    </div>
  );
}

export default App;
