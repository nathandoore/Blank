import {useEffect, useState} from 'react';
import {store} from '../store/store';
import List from '../components/List';
import Item from '../components/Item';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {getWeather} from '../services'
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import '../assets/App.css';

/**
 * @description The app view to render both child components
 */
function App() {
  const [loading, setLoading] = useState(true);
  const [, setState] = useState();
  const [list, setList] = useState();
  const [item, setItem] = useState();

  useEffect(() => {
    getWeather().then(() => { // Getting weather from API service
      setLoading(false);
    })
  }, []);

    // Keeps items up to date
    store.subscribe(() => {
      setList(store.getState().list);
      setItem(store.getState().item);
      setState(new Date());
     });
  

  return (<>
      {loading ? (<div style={{marginLeft: '100px'}}>
        <Skeleton width="40%" height="900px" />
      </div>) : 
      (<>
        <Typography component="div" style={{ backgroundColor: '#dfe6e9', height: '100vh', padding: '50px' }}>
            <h1>React Excersize (Weather using redux store) </h1>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Paper>
                  <List list={list}/>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper>
                  <Item item={item}/>
                </Paper>
              </Grid>
            </Grid>
          </Typography>
      </>)}
      
    </>);
}

export default App;
