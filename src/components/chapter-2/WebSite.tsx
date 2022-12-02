import * as React from "react";
import '../../style/website.css';
import {Button, List, ListItem} from "@mui/material";

const WebSite = () => {

    function nextChapter() {
        window.location.assign("/asso")
    }

    return (
        <div className="container-website">
            <h1 className="title-antivirus"> Capote antivirus activé ! </h1>

            <h2 className="title-2"> Quelques infos sympas 😉 </h2>

            <div className="container">

                <div className="category">
                    <div className="text-side">
                        <h3 className="title-3">Les différentes IST 🦠</h3>

                        <p>Il existe différentes IST plus ou moins dangereuses, voici les plus connues :</p>

                        <List sx={{
                            width: '100%',
                            maxWidth: 360,
                            bgcolor: 'background.paper',
                            position: 'relative',
                            textAlign: 'center',
                            justifyContent: 'center',
                            '& ul': { padding: 0 },
                        }}>
                            <ListItem>- Le VIH</ListItem>
                            <ListItem>- Les Mycoplasmes</ListItem>
                            <ListItem>- Les Herpès</ListItem>
                            <ListItem>- Le Trichomonas Vaginalis</ListItem>
                            <ListItem>- Le Papillomavirus Humain</ListItem>
                            <ListItem>- Le Chlamydiae trachomatis</ListItem>
                            <ListItem>- Gonocoque</ListItem>
                            <ListItem>- Hépatite B</ListItem>
                            <ListItem>- Hépatite C</ListItem>
                            <ListItem>- Syphilis</ListItem>
                        </List>

                        <p>
                            La prévention des infections sexuellement transmissibles est primordiale. Elle passe principalement par l’utilisation du préservatif pour éviter la transmission des germes par voie sexuelle. Pour prévenir les infections par le virus VHB (hépatite B) et le papillomavirus, la vaccination est recommandée.
                        </p>

                        <p>
                            Voici quelques conseils importants pour vous protéger et protéger vos partenaires de façon efficace du VIH et des autres infections sexuellement transmissibles .
                        </p>
                    </div>

                    <div className="image-side">
                        <img className="image" alt="communication" src="chapter-2/doctor.png"/>
                    </div>

                </div>

                <div className="category">

                    <div className="image-side">
                        <img className="image" alt="communication" src="chapter-2/securize.png"/>
                    </div>

                    <div className="text-side">
                        <h3>Le préservatif le moyen le plus efficace pour lutter contre les IST 🍆</h3>

                        <p>
                            Utilisez un préservatif lors de chaque rapport sexuel et avec chaque partenaire tant que vous n’avez pas la certitude qu’il n’est pas porteur d’une IST.
                            <br/>
                            Deux situations au cours desquelles le préservatif ne protège pas complètement :
                        </p>
                        <List sx={{
                            width: '100%',
                            maxWidth: 1000,
                            bgcolor: 'background.paper',
                            position: 'relative',
                            '& ul': { padding: 0 },
                        }}>
                            <ListItem>- C'est la cas dans les infections à papillomavirus, d'où l'importance d'être vacciné(e).</ListItem>
                            <ListItem>- De même au cours de la première infection (primo-infection) et des poussées d’herpès génital, le risque de transmission est majeur et le préservatif ne protège que des lésions situées sur le sexe. Si des lésions d’herpès sont présentes à proximité (sur la vulve, les cuisses, l'anus), le risque de contamination du partenaire est grand. Il est conseillé d'éviter les relations sexuelles, même protégées par un préservatif.</ListItem>
                        </List>

                        <p>
                            Si vous pensez avoir une infection sexuellement transmissible, consultez sans attendre.
                            <br/>
                            Si vous êtes traité pour IST, prenez le traitement prescrit par votre médecin jusqu'au bout et prévenez votre ou vos partenaires(s) afin qu'il(s) ou qu'elle(s) puissent également se faire dépister et traiter le cas échéant.
                        </p>
                    </div>

                </div>

                <div className="category">

                    <div className="text-side">

                        <h3>Où se renseigner ? 📬</h3>

                        <p> Voici quelques liens utiles ou services qui pourront vous informer sur le sujet  : </p>

                        <List sx={{
                            width: '100%',
                            maxWidth: 360,
                            bgcolor: 'background.paper',
                            position: 'relative',
                            '& ul': { padding: 0 },
                        }}>
                            <ListItem>- Les Centres Régionaux d'Information et de Prévention du Sida (CRIPS)</ListItem>
                            <ListItem>- Les Bureaux d'Information Jeunesse (BIJ)</ListItem>
                            <ListItem>- Les Espaces Santé Jeunes</ListItem>
                            <ListItem>- Au planning familial</ListItem>
                            <ListItem>- Différentes associations</ListItem>
                            <ListItem></ListItem>
                        </List>

                    </div>

                    <div className="image-side">
                        <img className="image" alt="communication" src="chapter-2/communication.png"/>
                    </div>

                </div>


                <p style={{textAlign: 'center', marginTop: '10vh'}}>Si vous avez des doutes sur le fait d'être infecté, n'hésitez pas à vous faire dépister ! </p>

                <div style={{display: "flex", justifyContent: "center", marginBottom: "7vh"}}>
                    <Button onClick={nextChapter} className="depisted" color="success" variant="contained">Se faire dépister !</Button>
                </div>

            </div>

        </div>
    )

}

export default WebSite;