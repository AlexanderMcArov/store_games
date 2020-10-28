import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { useDispatch } from 'react-redux'
import { changePriceSettings } from '../../../../../redux/actions/GameListFilter'

const useStyles = makeStyles({
    root: {
        width: '100%',
        background: 'white',
        padding: '10px',
        margin: '0px 5px'
    },
    btn: {
        border: 0,
        background: 0,
        marginLeft: 20,
        padding: 0
    }
});

function valuetext(value) {
    return `${value}Р`;
}

export default function RangeSlider() {
    let obj = JSON.parse(localStorage.getItem('filter'))
    const [value, setValue] = React.useState(obj.price);
    obj.price = value
    localStorage.setItem('filter',JSON.stringify(obj))

    const classes = useStyles();
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(changePriceSettings(value))
    },[value])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Typography id="range-slider" gutterBottom> 
                Цена: от {value[0]} Р до {value[1]} Р
            <button className={classes.btn} onClick={()=>setValue([0,3500])}><img style={{width: '20px'}} src="https://static.thenounproject.com/png/2283360-200.png"></img></button>
            </Typography>
            <Slider
                value={value}
                max={3500}
                min={0}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
            />
        </div>
    );
}
