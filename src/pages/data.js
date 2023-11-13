import componentsImg from '../assets/graph.png';
import propsImg from '../assets/graph2.png';
import jsxImg from '../assets/jsx-ui.png';
import stateImg from '../assets/banner2.png';

export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: 'Components',
    description:
      'The core UI building block - compose the user interface by combining multiple components.',
  },
  {
    image: jsxImg,
    title: 'JSX',
    description:
      'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
  },
  {
    image: propsImg,
    title: 'Props',
    description:
      'Make components configurable (and therefore reusable) by passing input data to them.',
  },
  {
    image: stateImg,
    title: 'State',
    description:
      'React-managed data which, when changed, causes the component to re-render & the UI to update.',
  },
];

export const EXAMPLES = {
  components: {
    title: 'Graph 1',
    description:
      'Brief description of what graph 1 is',
    image: componentsImg,
  },
  jsx: {
    title: 'Graph 2',
    description:'Brief description of what graph 2 is',
    image: stateImg,
  },
  props: {
    title: 'Graph 3',
    description:'Brief description of what graph 3 is',
    image: propsImg,
  },
  state: {
    title: 'State',
    description:
      'State allows React components to change their output over time in response to user actions, network responses, and anything else.',
    code: `
function Counter() {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible(true);
  }

  return (
    <div>
      <button onClick={handleClick}>Show Details</button>
      {isVisible && <p>Amazing details!</p>}
    </div>
  );
}`,
  },
};