import {useParams, Link} from "react-router-dom";
import Banner from "../components/Banner";
import TabButton from "../components/TabButton";
import {useState} from "react";
import {EXAMPLES} from "./data";
import  classes from "./BuildingDetail.module.css"



function  BuildingDetailPage () {
    const params = useParams();
    const [selectedTopic, setSelectedTopic] =useState('components');
    function handleClick(clickedButton) {
        setSelectedTopic(clickedButton);
    }
    return (
        <>
            <section>
            <Banner buildingId={params.buildingId}/>
            </section>
            <section>
            </section>
            <section className={classes.graphs}>
            <h2>Graphs</h2>
            <menu>
                <TabButton
                    isSelected ={selectedTopic === 'components'}
                    onClick ={() =>handleClick('components')}
                    label = 'Graph1Heading'/>
                <TabButton
                    isSelected ={selectedTopic === 'jsx'}
                    onClick={()=>handleClick('jsx')}
                    label = 'Graph2Heading'/>
                <TabButton
                    isSelected ={selectedTopic === 'props'}
                    onClick={()=>handleClick('props')}
                    label = 'Graph3Heading'/>

            </menu>
            {! selectedTopic && <p>Please select a topic.</p> }
            { selectedTopic && (<div id="tab-content">

                    <p>{EXAMPLES[selectedTopic].description}</p>
                <img src={EXAMPLES[selectedTopic].image}/>


            </div>)
            }
            </section>
            <p><Link to=".." relative="route">Back to Home Page</Link></p>
        </>
    )
}

export default BuildingDetailPage;