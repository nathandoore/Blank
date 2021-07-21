import{useEffect, useState} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import{setItemAction} from '../store/weather/actions';

/**
 * @description handles list view
 * @param {Object} props
 */
function Listed(props) {
  const [items, setItems] = useState(props.list);

  // Initial items set
  useEffect(() => {
    setItems(props.list);
  }, [props]);

  /**
   * @description redux action handlers
   * @param {Object} item 
   */
  function setItem(item){
    setItemAction(item);
  }

  /**
   * @returns Each listed item view
   */
  const ItemMap = () => {
    return(<>
      {items.map((item, index) => (<div key={index}>
        <ListItem>
          <Card style={{width: '100%'}}>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                  <ListItemText
                    primary={'Type of weather: ' + item['prec_type']}
                    secondary={'Wind Direction: ' + item['wind10m']['direction']}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <Button
                    onClick={() => setItem(item)}
                    variant="contained"
                    color="secondary"
                  >
                    More Details
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </ListItem>
      </div>)
      )}
    </>)
  }

  return(<>
    {items &&(<>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Typography variant="h3" style={{ padding: '20px'}}>
            List
          </Typography>
          <div>
            <List style={{overflow: 'auto', height: '500px'}}>
              <ItemMap/>
            </List>
          </div>
        </Grid>
      </Grid>
    </>)}
  </>);
}

export default Listed;