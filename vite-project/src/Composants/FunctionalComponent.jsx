export default function FunctionalComponent(props){
    
    const [state1,setState1]=useState(0);
    return <h3> Functional Component {props.test},the value of the state {state1}</h3>;
}