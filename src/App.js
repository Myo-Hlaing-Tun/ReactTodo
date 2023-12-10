// CSS
import './App.css';
// Components
import MainContent from './assignment5/main/MainContent';
import MainProvider from './assignment5/main/context/MainProvider';
import Navitems from './assignment5/navbar/Navitems'
import ThemeButton from './assignment5/theme/ThemeButton';
import ThemeProvider from './assignment5/theme/context/ThemeProvider';
import TodoProvider from './assignment5/main/components/todo/context/TodoProvider';

// themeprovider is to add theme switch button using Themecontext
// mainprovider is for displaying forms and todo list boxes using MainContext
// inside main provider TodoProvider is used so that the todolist you added will be saved and displayed again after visiting another navtabs and returning back to todoList again
function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <ThemeButton/>
      </ThemeProvider>
      <MainProvider>
          <Navitems/>
          <TodoProvider>
            <MainContent/>
          </TodoProvider>
        </MainProvider>
    </div>
  );
}

export default App;
