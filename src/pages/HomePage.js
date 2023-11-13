import {Link} from "react-router-dom";
import classes from './Home.module.css';

const Buildings = [
    {id: '1', title: 'Churchill',description : 'Text written will contain description of the building '},
    {id: '2', title: 'Wills',description : 'Text written will contain description of the building '},
    {id : '3', title: 'University Hall',description : 'Text written will contain description of the building '},
    {id : '4', title: 'Clifton Hill House',description : 'Text written will contain description of the building '}
];
function HomePage() {

    return (
      <>
        <h1>Home Page</h1>
         <h4>Go to <Link to="building"> the list of buildings</Link>. </h4>
          <h2> Residential Buildings</h2>
          <ul className={classes.list} >
              {Buildings.map( item =>
              <li key={item.id}>
                  <Link to={`building/${item.title}`}>{item.title}</Link>
              </li>)}
          </ul>
      </>
)
}

export default HomePage;