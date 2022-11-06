import React from "react";
import truncate from "../../helpers";
import {
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Collapse,
    IconButton,
    styled,
    Typography
} from "@mui/material";
import {ArrowDropDown} from "@mui/icons-material";

const ExpandMore = styled((props) => {
    const {expand, ...other} = props;
    return <IconButton {...other} />;
})(({theme, expand}) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const Product = (props) => {
    const [expanded, setExpanded] = React.useState(false);

    function handleExpandClick() {
        setExpanded(!expanded);
    }

    return (
        <Card sx={{maxWidth: 345}}>
            <CardHeader
                title={props.productData.title}
                subheader={props.productData.category}
            />
            <CardMedia
                component={"img"}
                image={props.productData.image}
                alt={props.productData.title}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {truncate(props.productData.description)}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ArrowDropDown/>
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>
                        {props.productData.description}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
};

export default Product;
