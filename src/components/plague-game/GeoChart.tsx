import React, {useEffect, useState} from 'react';
import {Chart} from "react-google-charts";
import {Button, Grid, GridColumn, GridRow, Icon, Message} from "semantic-ui-react";
import {useNavigate} from "react-router-dom";
import '../../style/pages/specialiste/geochart/geochart.css'
import {geoData} from "../../data/geoData";

const options = {
    colorAxis: {
        values: [0, 1, 2, 25, 50, 100, 120],
        colors: ['white','white', '#fba8a8', '#e80c0c', '#720c0f', '#581215', 'black']
    },
    backgroundColor: '#b98cd3',
    datalessRegionColor: '#b9b9b9',
    defaultColor: '#f5f5f5',
};

export const GeoChart = () => {
    const [mapData, setMapData] = useState(geoData);
    const [healingImpact, setHealingImpact] = useState(1);
    const [message, setMessage] = useState("");
    const [messageIsDisplay, setMessageIsDisplay] = useState(false);
    const [displayFirstStep, setDisplayFirstStep] = useState(true);
    const [displaySecondStep, setDisplaySecondStep] = useState(true);
    const [displayThirdStep, setDisplayThirdStep] = useState(true);
    const [displayFourthStep, setDisplayFourthStep] = useState(true);
    const navigate = useNavigate();

    const firstStepHandler = (event: any) => {
        event.preventDefault();
        setHealingImpact(2);
        setDisplayFirstStep(true);
    }

    const secondStepHandler = (event: any) => {
        event.preventDefault();
        setHealingImpact(4);
        setDisplaySecondStep(true);
    }

    const thirdStepHandler = (event: any) => {
        event.preventDefault();
        setHealingImpact(7);
        setDisplayThirdStep(true);
    }

    const fourthStepHandler = (event: any) => {
        event.preventDefault();
        setHealingImpact(9);
        setDisplayFourthStep(true);
    }

    useEffect(() => {
        const isGameFinish = () : boolean =>{
            return mapData.filter(value => Number(value[1]) !== 0).length === 1;
        }

        const interval = setInterval(() => {
            const healing_percentage = Math.floor(Math.random() * 10);
            mapData.forEach(value => {
                if (value[1] !== 'Value') {
                    if (healing_percentage <= healingImpact) {
                        value[1] = Number(value[1]) - (healingImpact === 9 ? 9 : Math.floor(Math.random() * 3));
                        if (value[1] < 0) {
                            value[1] = 0;
                        }
                    } else {
                        value[1] = Number(value[1]) + Math.floor(Math.random() * 5);
                    }
                }
            })
            const mapCopy = Array.from(mapData);
            setMapData(mapCopy);
            if (isGameFinish()){
                navigate('/final')
            }
        }, 3000);
        if(isGameFinish()){
            clearInterval(interval)
        }
        return() => clearInterval(interval);
    }, [healingImpact, mapData, navigate]);

    useEffect(() => {
        const firstMessage = setTimeout(() => {
            //First message of specialist
            setMessageIsDisplay(true);
            setMessage("Pour combattre la maladie la mise en place d'une communication efficace peut changer la donne !");
            setDisplayFirstStep(false);
        }, 8000);
        const removeFirstMessage = setTimeout(() => {
            setMessageIsDisplay(false);
        }, 12000);

        // second Step :
        const secondMessage = setTimeout(() => {
            setMessageIsDisplay(true);
            setMessage("Pour combattre la maladie peut être faudrait-il enseigner les bonnes pratiques de la sexualité dès le collège ?");
            setDisplaySecondStep(false);
        }, 17000);
        const removeSecondMessage = setTimeout(() => {
            setMessageIsDisplay(false);
        }, 21000);

        // Third Step :
        const thirdMessage = setTimeout(() => {
            setMessageIsDisplay(true);
            setMessage("Pour combattre la maladie rien ne vaut les campagnes de dépistage, à vous de jouer !");
            setDisplayThirdStep(false);
        }, 28000);
        const removeThirdMessage = setTimeout(() => {
            setMessageIsDisplay(false);
        }, 32000);

        // Third Step :
        const fourthMessage = setTimeout(() => {
            setMessageIsDisplay(true);
            setMessage("Pour combattre la maladie la gratuité des protections est peut être la solution !");
            setDisplayFourthStep(false);
        }, 42000);
        const removeFourthMessage = setTimeout(() => {
            setMessageIsDisplay(false);
        }, 46000);
        return () => {
            clearTimeout(removeFirstMessage);
            clearTimeout(firstMessage);
            clearTimeout(removeSecondMessage);
            clearTimeout(secondMessage);
            clearTimeout(removeThirdMessage);
            clearTimeout(thirdMessage);
            clearTimeout(removeFourthMessage);
            clearTimeout(fourthMessage);
        }
    }, []);

    return (
        <div className="geochart">
            <Grid columns={2}>
                <GridColumn>
                    <Chart
                        key={mapData[0][1]}
                        width={'700px'}
                        height={'320px'}
                        chartType="GeoChart"
                        data={mapData}
                        mapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}
                        rootProps={{'data-testid': '1'}}
                        options={options}
                        legendToggle
                    />
                </GridColumn>
                <GridColumn className="button-container">
                    <GridRow className="button-action">
                        <Button color='green' disabled={displayFirstStep} onClick={firstStepHandler} icon labelPosition='left'>
                            <Icon name={"arrow left"}/>
                            Mettre en place une communication
                        </Button>
                    </GridRow>
                    <GridRow className="button-action">
                        <Button color='green' disabled={displaySecondStep} onClick={secondStepHandler} icon labelPosition='left'>
                            <Icon name={"arrow left"}/>
                            Proposer des cours sur la sexualité
                        </Button>
                    </GridRow>
                    <GridRow className="button-action">
                        <Button color='green' disabled={displayThirdStep} onClick={thirdStepHandler} icon labelPosition='left'>
                            <Icon name={"arrow left"}/>
                            Mettre en place une campagne de dépistage
                        </Button>
                    </GridRow>
                    <GridRow className="button-action">
                        <Button color='green' disabled={displayFourthStep} onClick={fourthStepHandler} icon labelPosition='left'>
                            <Icon name={"arrow left"}/>
                            Rendre les protections contre les MST gratuites
                        </Button>
                    </GridRow>
                </GridColumn>
            </Grid>
            {messageIsDisplay ?
                <div className="message">
                    <Grid columns={2}>
                        <GridColumn>
                            <Message warning>
                                <Message.Header>Message de la sexologue</Message.Header>
                                <p>{message}</p>
                            </Message>
                        </GridColumn>
                        <GridColumn>
                            <img className="specialist" src="chapter-4/scientitst.png" alt="scientist"/>
                        </GridColumn>
                    </Grid>
                </div> : ""}
        </div>
    );
}