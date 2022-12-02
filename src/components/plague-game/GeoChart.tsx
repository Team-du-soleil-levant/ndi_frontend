import React, {useEffect, useState} from 'react';
import {Chart} from "react-google-charts";
import {Button, Grid, GridColumn, GridRow, Icon, Message} from "semantic-ui-react";
import {useNavigate} from "react-router-dom";

const geoData = [
    ['Country', 'Value'],
    ["Bhutan",1],
    ["Democratic Republic of the Congo",1],
    ["Liechtenstein",1],
    ["Maldives",1],
    ["Sudan",1],
    ["Zimbabwe",1],
    ["Mauritania",1],
    ["Mozambique",1],
    ["Nigeria",1],
    ["Swaziland",1],
    ["Tanzania",1],
    ["Iraq",1],
    ["Guyana",1],
    ["Namibia",1],
    ["Senegal",1],
    ["Turkmenistan",1],
    ["Afghanistan",1],
    ["Andorra",1],
    ["Fiji",1],
    ["Gabon",1],
    ["Uzbekistan",1],
    ["Cameroon",1],
    ["Cuba",1],
    ["Faroe Islands",1],
    ["El Salvador",1],
    ["Caribbean",1],
    ["Ethiopia",1],
    ["Mongolia",1],
    ["Puerto Rico",1],
    ["Samoa",1],
    ["Myanmar",1],
    ["Nicaragua",1],
    ["Seychelles",1],
    ["Tajikistan",1],
    ["Dominican Republic",1],
    ["Guinea",1],
    ["Barbados",1],
    ["CI",1],
    ["Laos",1],
    ["Libya",1],
    ["Panama",1],
    ["Bahrain",1],
    ["Benin",1],
    ["Ghana",1],
    ["Haiti",1],
    ["Montenegro",1],
    ["Somalia",1],
    ["Syria",1],
    ["Ecuador",1],
    ["Honduras",1],
    ["Madagascar",1],
    ["Papua New Guinea",1],
    ["Tunisia",1],
    ["Angola",1],
    ["Botswana",1],
    ["Cyprus",1],
    ["Algeria",1],
    ["Bahamas",1],
    ["New Caledonia",1],
    ["Uganda",1],
    ["Yemen",1],
    ["Zambia",1],
    ["Antarctica",1],
    ["Paraguay",1],
    ["Jamaica",1],
    ["Palestine",1],
    ["Bolivia",1],
    ["Bosnia and Herzegovina",1],
    ["Vietnam",1],
    ["Kenya",1],
    ["Luxembourg",1],
    ["Niger",1],
    ["Kuwait",1],
    ["Hawaii",1],
    ["Scotland",1],
    ["Cambodia",1],
    ["Uruguay",1],
    ["Kyrgyzstan",1],
    ["Saudi Arabia",1],
    ["Indonesia",1],
    ["Azerbaijan",1],
    ["United Arab Emirates",1],
    ["Mauritius",1],
    ["Morocco",1],
    ["Albania",1],
    ["South Korea",1],
    ["Kazakhstan",1],
    ["Macedonia",1],
    ["Venezuela",1],
    ["Taiwan",1],
    ["Qatar",1],
    ["Jordan",1],
    ["Iceland",1],
    ["Guatemala",1],
    ["Costa Rica",1],
    ["Hong Kong",1],
    ["San Marino",1],
    ["Colombia",1],
    ["Moldova",1],
    ["Armenia",1],
    ["Malta",1],
    ["Nepal",1],
    ["Lebanon",1],
    ["Malaysia",1],
    ["Serbia",1],
    ["Peru",1],
    ["Trinidad and Tobago",1],
    ["Lithuania",1],
    ["Estonia",1],
    ["Georgia",1],
    ["Iran",1],
    ["Chile",1],
    ["Latvia",1],
    ["Thailand",1],
    ["Egypt",1],
    ["Slovenia",1],
    ["Mexico",1],
    ["Belarus",1],
    ["Slovakia",1],
    ["Sri Lanka",1],
    ["Croatia",1],
    ["Philippines",1],
    ["Bangladesh",1],
    ["Turkey",1],
    ["Romania",1],
    ["Italy",1],
    ["South Africa",1],
    ["Hungary",1],
    ["Pakistan",1],
    ["Portugal",1],
    ["Ukraine",1],
    ["Greece",1],
    ["Oman",1],
    ["Argentina",1],
    ["Singapore",1],
    ["Bulgaria",1],
    ["Japan",1],
    ["Czech Republic ",1],
    ["Ireland",1],
    ["China",1],
    ["Finland",1],
    ["Brazil",1],
    ["Norway",1],
    ["Austria",1],
    ["Denmark",1],
    ["Belgium",1],
    ["New Zealand",1],
    ["Spain",1],
    ["Switzerland",1],
    ["Russia",1],
    ["Poland",1],
    ["Israel",1],
    ["Sweden",1],
    ["Netherlands",1],
    ["France",1],
    ["Australia",1],
    ["Canada",1],
    ["India",1],
    ["Germany",1],
    ["United Kingdom",1],
    ["United States",1],
    ["Unknown",1],
]

const options = {
    colorAxis: {
        values: [0, 1, 2, 25, 50, 100, 120],
        colors: ['white','white', '#fba8a8', '#e80c0c', '#720c0f', '#581215', 'black']
    },
    backgroundColor: 'grey',
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

    const firstStepHandler = (e: any) => {
        e.preventDefault();
        setHealingImpact(2);
        setDisplayFirstStep(true);
    }

    const secondStepHandler = (e: any) => {
        e.preventDefault();
        setHealingImpact(4);
        setDisplaySecondStep(true);
    }

    const thirdStepHandler = (e: any) => {
        e.preventDefault();
        setHealingImpact(7);
        setDisplayThirdStep(true);
    }

    const fourthStepHandler = (e: any) => {
        e.preventDefault();
        setHealingImpact(9);
        setDisplayFourthStep(true);
    }

    const isGameFinish = () : Boolean =>{
        console.log(mapData.filter(value => Number(value[1]) !== 0).length)
        return mapData.filter(value => Number(value[1]) !== 0).length === 1;
    }

    useEffect(() => {
        const interval = setInterval(() => {
            const healing_percentage = Math.floor(Math.random() * 10);
            mapData.forEach(value => {
                if (value[1] !== 'Value') {
                    console.log(healingImpact)
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
    }, [healingImpact]);

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
            setMessage("Pour combattre la maladie la mise en place d'une communication efficace peut changer la donne !");
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
        <div>
            <Grid columns={2}>
                <GridColumn>
                    <Chart
                        key={mapData[0][1]}
                        width={'700px'}
                        height={'320px'}
                        chartType="GeoChart"
                        data={mapData}
                        mapsApiKey="AIzaSyBTJJdmefqYiLdBpWwvizfSQF3rOtKoxCA"
                        rootProps={{'data-testid': '1'}}
                        options={options}
                        legendToggle
                    />
                </GridColumn>
                <GridColumn className="button-container">
                    <GridRow className="button-action">
                        <Button disabled={displayFirstStep} onClick={firstStepHandler} icon labelPosition='left'>
                            <Icon name={"arrow left"}/>
                            Mettre en place une communication
                        </Button>
                    </GridRow>
                    <GridRow className="button-action">
                        <Button disabled={displaySecondStep} onClick={secondStepHandler} icon labelPosition='left'>
                            <Icon name={"arrow left"}/>
                            Proposer des cours sur la sexualité
                        </Button>
                    </GridRow>
                    <GridRow className="button-action">
                        <Button disabled={displayThirdStep} onClick={thirdStepHandler} icon labelPosition='left'>
                            <Icon name={"arrow left"}/>
                            Mettre en place une communication
                        </Button>
                    </GridRow>
                    <GridRow className="button-action">
                        <Button disabled={displayFourthStep} onClick={fourthStepHandler} icon labelPosition='left'>
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