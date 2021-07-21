import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import {setItemAction, setList} from '../store/weather/actions';
import {store} from '../store/store';

/**
 * @description handles item view
 * @param {Object} props
 */
function Item(props) {
  const item = props.item;

  /**
   * @description Handles manipulation of item/list
   * @param {Object} item 
   * @param {Boolean} deleteItem 
   */
  function editItem(item, deleteItem){
    // Check if delete or increment
    if(deleteItem) {
    const list = store.getState().list;
    const index = list.indexOf(item);
      if (index > -1) {
        list.splice(index, 1);
      }
      
      setList(list);
      item = null;
    } else item.seeing += 1;
    
    setItemAction(item);
  };

  return(<>
    {item &&(<>
      <Card style={{width: '100%'}}>
        <CardContent>
          <Typography variant="h3" style={{ padding: '20px'}}>
            Item
          </Typography>
          <Typography variant="h5" component="h2">
              CLoudCover: {item['cloudcover']} <br/>
              Lifted: {item['lifted_index']} <br/>
              Prec{item['prec_type']} <br/>
              Seeing distance: {item['seeing']}00m <br/>
              Average Temp: {item['temp2m']} <br/>
              Time Point: {item['timepoint']} <br/>
              Transparency: {item['transparency']}
          </Typography>
          <Button
            onClick={() => (editItem(item, true))}
            variant="contained"
            color="secondary"
          >
            Delete Me
          </Button>
          <Button
            onClick={() => (editItem(item))}
            variant="contained"
            color="primary"
          >
            Increment Seeing Distance by 100m
          </Button>
        </CardContent>
      </Card>
    </>)}
  </>);
}

export default Item;