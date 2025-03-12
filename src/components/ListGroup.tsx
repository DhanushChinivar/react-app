import {useState} from 'react';


interface props{
    items :string[];
    heading: string;
    onSelectItem?: (item:string) => void;
}
function ListGroup(props:props){


const [selectedIndex, setSelectedIndex] = useState(-1);

return(
<>
<h1>{props.heading}</h1>
{props.items.length === 0 && <p>There are no items!</p>}
<ul className="list-group">
{props.items.map((item, index) => (
<li className= {selectedIndex === index ? 'list-group-item active' : 'list=group-item'} 
key={item} onClick={() => {setSelectedIndex(index) 
if(props.onSelectItem){
props.onSelectItem(item);
}}
 }>
{item}
</li>
))}
</ul>
</>
);
}
export default ListGroup;
