import React from "react";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    dashboardIcon: {
        paddingBottom: "0px",
        '& svg': {
            fontSize: "4rem",
            marginTop: "1rem"
        }
    },
    card: {
        backgroundColor: "#efefef",
        height: "100%"
    }
}));

type Props = {
    icon: any,
    name: string,
    route: string,
    description: string
}

const DasshboardBox = ({ icon, name, route, description }: Props): React.ReactElement => {
    const classes = useStyles();
    return (
        <Link underline='none' href={route}>
            <Card className={classes.card}>
                <CardContent className={classes.dashboardIcon}>
                    {icon}
                </CardContent>
                <CardHeader title={name} subheader={description} />
            </Card>
        </Link>
    );
};

export default DasshboardBox;